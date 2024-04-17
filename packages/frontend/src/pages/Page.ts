import {
  ActivityApiResponse,
  DiffHistoryApiResponse,
  FinalityApiResponse,
  ImplementationChangeReportApiResponse,
  L2CostsApiResponse,
  L2FeesApiResponse,
  LivenessApiResponse,
  ManuallyVerifiedContracts,
  ProjectAssetsBreakdownApiResponse,
  TvlApiResponse,
  VerificationStatus,
} from '@l2beat/shared-pure'
import { ReactElement } from 'react'

export interface Page {
  slug: string
  page: ReactElement
}

export interface Wrapped<Props> {
  props: Props
  wrapper: WrapperProps
}

export interface WrapperProps {
  htmlClassName?: string
  bodyClassName?: string
  metadata: PageMetadata
  preloadApis?: string[]
  banner: boolean | undefined
}
export interface PageMetadata {
  title: string
  description: string
  image: string
  url: string
}

export interface PagesData {
  tvlApiResponse: TvlApiResponse
  activityApiResponse: ActivityApiResponse | undefined
  verificationStatus: VerificationStatus
  manuallyVerifiedContracts: ManuallyVerifiedContracts
  tvlBreakdownApiResponse: ProjectAssetsBreakdownApiResponse | undefined
  livenessApiResponse: LivenessApiResponse | undefined
  finalityApiResponse: FinalityApiResponse | undefined
  diffHistory: DiffHistoryApiResponse | undefined
  l2CostsApiResponse: L2CostsApiResponse | undefined
  l2FeesApiResponse: L2FeesApiResponse | undefined
  implementationChange: ImplementationChangeReportApiResponse | undefined
}
