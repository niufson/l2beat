import { type StageConfig } from '@l2beat/config'
import { compact, uniq } from 'lodash'
import React from 'react'
import { Checkbox } from '~/app/_components/checkbox'
import { OverflowWrapper } from '~/app/_components/overflow-wrapper'
import { TableFilter } from '~/app/_components/table/filters/table-filter'
import { type ScalingRiskEntry } from '~/server/features/scaling/get-scaling-risk-entries'
import {
  type ScalingDataAvailabilityEntry,
  type ScalingSummaryLayer2sEntry,
  type ScalingSummaryLayer3sEntry,
} from '~/server/features/scaling/types'

export type BaseScalingFiltersEntry =
  | ScalingSummaryLayer2sEntry
  | ScalingSummaryLayer3sEntry
  | ScalingRiskEntry
  | ScalingDataAvailabilityEntry

export interface BaseScalingFiltersState {
  rollupsOnly: boolean | undefined
  category: string | undefined
  stack: string | undefined
  stage: string | undefined
  purpose: string | undefined
}

interface Props<T extends BaseScalingFiltersState> {
  items: BaseScalingFiltersEntry[]
  state: T
  setState: React.Dispatch<React.SetStateAction<T>>
  additionalFilters?: React.ReactNode
}

export function BaseScalingFilters<T extends BaseScalingFiltersState>({
  items,
  state,
  setState,
  additionalFilters,
}: Props<T>) {
  const typeOptions = uniq(items.map((item) => item.category))
    .sort()
    .map((value) => ({
      label: value,
      value,
    }))

  const stackOptions = uniq(items.map((item) => item.provider))
    .sort()
    .map((value) => ({
      label: value ?? 'No stack',
      value,
    }))

  const stageOptions = uniq(
    compact(
      items.map((item) => {
        if ('stage' in item) {
          return item.stage?.stage
        }
      }),
    ),
  )
    .sort()
    .map((value) => ({
      label: stageLabel(value),
      value,
    }))

  const purposeOptions = uniq(items.flatMap((item) => item.purposes))
    .sort()
    .map((value) => ({
      label: value,
      value,
    }))

  const isRollupInItems = items.some((item) => item.category.includes('Rollup'))

  return (
    <OverflowWrapper>
      <div className="flex space-x-2">
        <Checkbox
          id="rollups-only"
          onCheckedChange={(checked) =>
            setState((prev) => ({ ...prev, rollupsOnly: !!checked }))
          }
          disabled={!isRollupInItems}
        >
          Rollups only
        </Checkbox>
        <TableFilter
          title="Type"
          options={typeOptions}
          value={state.category}
          onValueChange={(value) =>
            setState((prev) => ({ ...prev, category: value }))
          }
        />
        <TableFilter
          title="Stack"
          options={stackOptions}
          value={state.stack}
          onValueChange={(value) =>
            setState((prev) => ({ ...prev, stack: value }))
          }
        />
        <TableFilter
          title="Stage"
          options={stageOptions}
          value={state.stage}
          onValueChange={(value) =>
            setState((prev) => ({ ...prev, stage: value }))
          }
        />
        <TableFilter
          title="Purpose"
          options={purposeOptions}
          value={state.purpose}
          onValueChange={(value) =>
            setState((prev) => ({ ...prev, purpose: value }))
          }
        />
        {additionalFilters}
      </div>
    </OverflowWrapper>
  )
}

function stageLabel(stage: StageConfig['stage']) {
  switch (stage) {
    case 'NotApplicable':
      return 'Not applicable'
    case 'UnderReview':
      return 'Under review'
    default:
      return stage
  }
}
