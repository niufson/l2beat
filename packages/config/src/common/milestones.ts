import { Milestone } from './Milestone'

const MAINNET_OPEN = {
  name: 'Mainnet for everyone',
  description:
    'Whitelist got removed, there are no restrictions on who can transact with the network.',
}

export const MILESTONES = {
  MAINNET_OPEN,
}

export const HOMEPAGE_MILESTONES: Milestone[] = [
  {
    name: 'First ZK Rollup (DEX)',
    date: '2019-12-04T00:00:00Z',
    link: 'https://medium.loopring.io/loopring-deployed-protocol-3-0-on-ethereum-a33103c9e5bf',
    description:
      'Loopring is live, bringing the first DEX protocol on ZK Rollup technology.',
  },
  {
    name: 'First StarkEx Validium',
    date: '2020-06-03T00:00:00Z',
    link: 'https://medium.com/starkware/starks-over-mainnet-b83e63db04c0',
    description:
      'DeversiFi is live, bringing first STARKex Validium for spot trading.',
  },
  {
    name: 'First ZK Rollup (for payments)',
    date: '2020-06-18T00:00:00Z',
    link: 'https://blog.matter-labs.io/zksync-is-live-bringing-trustless-scalable-payments-to-ethereum-9c634b3e6823',
    description: 'ZKsync 1.0 is live, bringing first ZK Rollup for payments.',
  },
  {
    name: 'Ethereum Rollup centric future',
    date: '2020-10-02T00:00:00Z',
    link: 'https://ethereum-magicians.org/t/a-rollup-centric-ethereum-roadmap/4698',
    description:
      'Rollups are considered a scaling solution for the near and mid-term future of Ethereum.',
  },
  {
    name: 'First Optimistic Rollup (for payments)',
    date: '2020-12-31T00:00:00Z',
    link: 'https://twitter.com/fuellabs_/status/1344707195250896899',
    description:
      'Fuel v1 is live, bringing first trustless Optimistic Rollup for payments.',
  },
  {
    name: 'First Optimistic Rollup (universal)',
    link: 'https://medium.com/ethereum-optimism/mainnet-soft-launch-7cacc0143cd5',
    date: '2021-01-16T00:00:00Z',
    description:
      'Optimism is live, bringing first permissioned universal Optimistic Rollup with fraud proofs.',
  },
  {
    name: 'First private ZK Rollup (for payments)',
    link: 'https://medium.com/aztec-protocol/launching-aztec-2-0-rollup-ac7db8012f4b',
    date: '2021-03-15T00:00:00Z',
    description:
      'Aztec is live, bringing first private ZK Rollup for payments.',
  },
  {
    name: 'First StarkEx Rollup (perpetuals)',
    date: '2021-04-06T00:00:00Z',
    link: 'https://dydx.exchange/blog/public',
    description:
      'dYdX is live, bringing first STARKex Rollup for perpetuals trading.',
  },
  {
    name: 'First public Optimistic Rollup (universal)',
    link: 'https://offchain.medium.com/mainnet-for-everyone-27ce0f67c85e',
    date: '2021-08-31T00:00:00Z',
    description:
      'Arbitrum removed whitelist, becoming first publicly open universal Optimistic Rollup.',
  },
  {
    name: 'First STARK-based Rollup (universal)',
    link: 'https://medium.com/starkware/starknet-alpha-now-on-mainnet-4cf35efd1669',
    date: '2021-11-29T00:00:00Z',
    description:
      'Starknet Alpha is live, bringing first universal rollup based on ZK Rollup technology.',
  },
  {
    name: 'First Optimium (universal)',
    link: 'https://metisdao.medium.com/decentralized-storage-goes-live-da876dc6eb70',
    date: '2022-04-12T00:00:00Z',
    description:
      'Metis starts storing data off-chain, becoming first Optimium.',
  },
  {
    name: 'First Optimium with fallback (universal)',
    link: 'https://medium.com/offchainlabs/its-time-for-a-new-dawn-nova-is-open-to-the-public-a081df1e4ad2',
    date: '2022-08-09T00:00:00Z',
    description:
      'Arbitrum Nova is live, becoming first Optimium with fallback to Rollup mode.',
  },
  {
    name: 'First ZK Rollup with universal Solidity support',
    date: '2023-03-24T00:00:00Z',
    link: 'https://blog.matter-labs.io/gm-zkevm-171b12a26b36',
    description:
      'ZKsync Era is now permissionless and open for everyone bringing first zkEVM to mainnet.',
  },
  {
    name: 'EIP-4844 (Protodanksharding) is live on mainnet',
    date: '2024-03-13T00:00:00Z',
    link: 'https://ethereum.org/en/roadmap/danksharding/#what-is-protodanksharding',
    description:
      'Blobs create a new, cheap way to post data on-chain that is specialized for rollups.',
  },
]
