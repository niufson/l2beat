import { EthereumAddress } from '@l2beat/shared-pure'

import {
  DaBridge,
  DacBridge,
  OnChainDaBridge,
  ScalingProjectContract,
  isSingleAddress,
} from '../../src'
import { Project } from './types'
import { withoutDuplicates } from './utils'

export interface AddressOnChain {
  chain: string
  address: EthereumAddress
}

export function getUniqueContractsForAllProjects(
  projects: Project[],
  chain: string,
): EthereumAddress[] {
  const addresses = projects.flatMap((project) =>
    getUniqueContractsForProject(project, chain),
  )
  return withoutDuplicates(addresses)
}

export function getUniqueAddressesForDaBridge(
  bridge: DaBridge,
  chain: string,
): EthereumAddress[] {
  const addresses = withoutDuplicates(
    getDaBridgeContractsForChain(bridge, chain).map((c) => c.address),
  )
  const permissions = withoutDuplicates(
    getDaBridgePermissionsForChain(bridge, chain).map((p) => p.address),
  )

  return [...addresses, ...permissions]
}

export function getUniqueContractsForProject(
  project: Project,
  chain: string,
): EthereumAddress[] {
  const projectContracts = getProjectContractsForChain(project, chain)
  return getUniqueContractsFromList(projectContracts).map((c) => c.address)
}

export function getUniqueContractsFromList(
  contracts: ScalingProjectContract[],
): AddressOnChain[] {
  const mainAddresses = contracts.flatMap((c) =>
    getAddresses(c).map((a) => ({ address: a, chain: c.chain ?? 'ethereum' })),
  )
  const upgradeabilityAddresses = contracts
    .filter(isSingleAddress)
    .filter((c) => !!c.upgradeability) // remove undefined
    .flatMap((c) =>
      (c.upgradeability?.implementations ?? []).flatMap((a) => ({
        address: a,
        chain: c.chain ?? 'ethereum',
      })),
    )

  return withoutDuplicates([...mainAddresses, ...upgradeabilityAddresses])
}

function getProjectContractsForChain(project: Project, chain: string) {
  const contracts = (project.contracts?.addresses ?? []).filter((contract) =>
    isContractOnChain(contract, chain),
  )
  const escrows = project.config.escrows
    .flatMap((escrow) => {
      if (!escrow.newVersion) {
        return []
      }
      return { address: escrow.address, ...escrow.contract }
    })
    .filter((escrowContract) => isContractOnChain(escrowContract, chain))

  return [...contracts, ...escrows]
}

function getDaBridgeContractsForChain(
  bridge: DaBridge,
  chain: string,
): AddressOnChain[] {
  const contracts = [bridge]
    .filter(
      (b): b is OnChainDaBridge | DacBridge =>
        b.type === 'OnChainBridge' || b.type === 'DAC',
    )
    .flatMap((b) => b.contracts.addresses)
  const addresses = getUniqueContractsFromList(contracts)
  return addresses.filter((a) => a.chain === chain)
}

function getDaBridgePermissionsForChain(
  bridge: DaBridge,
  chain: string,
): AddressOnChain[] {
  const permissions: AddressOnChain[] = [bridge]
    .filter(
      (b): b is OnChainDaBridge | DacBridge =>
        b.type === 'OnChainBridge' || b.type === 'DAC',
    )
    .flatMap((b) =>
      b.permissions.flatMap((p) => {
        return p.accounts.flatMap((a) => ({
          chain: b.chain.toString(),
          address: a.address,
        }))
      }),
    )

  return permissions.filter((p) => p.chain === chain)
}

function isContractOnChain(contract: ScalingProjectContract, chain: string) {
  // For backwards compatibility, we assume that contracts without chain are for ethereum
  if (contract.chain === undefined && chain === 'ethereum') {
    return true
  }
  return contract.chain === chain
}

export function areAllAddressesVerified(
  addresses: EthereumAddress[],
  addressVerificationMap: Record<string, boolean>,
): boolean {
  return addresses.every(
    (address) => addressVerificationMap[address.toString()],
  )
}

function getAddresses(c: ScalingProjectContract): EthereumAddress[] {
  if (isSingleAddress(c)) {
    return [c.address]
  } else {
    return c.multipleAddresses
  }
}
