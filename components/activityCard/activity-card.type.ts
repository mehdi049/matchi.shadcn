import {
  AddedActivityResponse,
  AddedActivityResponseSm,
} from '@/types/added-activity-response.type'
import { UserAttendanceRequestStatus } from '@/types/user-attendance-response.type'

export type ActivityCardProps = {
  activity?: AddedActivityResponseSm | AddedActivityResponse
  hosting?: boolean
  attending?: boolean
  requestStatus?: UserAttendanceRequestStatus
  displayFooter?: boolean
  display?: 'full' | 'minimal'
}
