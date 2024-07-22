import { OutLink } from '~/app/_components/out-link'

export function FinalityWarning() {
  return (
    <p className="my-4 rounded-lg bg-yellow-500 p-2 text-center font-medium text-black text-xs">
      Please note, the values on the page reflect the time required to achieve
      ordering finality, at which point transactions cannot be reverted or
      reordered. For simplicity, they do not include the overhead time to reach
      L1 finality, which is the same for all projects. The actionable settlement
      time on the L1 (that affects your ability to withdraw your funds on the
      L1) for these transactions may be longer. In most other cases, however,
      this does not apply (e.g., when transferring funds to an exchange). For
      more information on how finality works for L2 transactions, check{' '}
      <OutLink href="https://medium.com/l2beat/tracking-time-to-finality-of-l2-transactions-051d32f5d5ba">
        our article
      </OutLink>
      .
    </p>
  )
}
