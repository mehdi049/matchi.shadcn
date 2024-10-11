import {
  AddedActivityResponse,
  AddedActivityResponseSm,
} from '@/types/AddedActivityResponse'
import { UserAttendanceRequestStatus } from '@/types/UserAttendanceResponse'

export type ActivityCardProps = {
  activity?: AddedActivityResponseSm | AddedActivityResponse
  hosting?: boolean
  attending?: boolean
  requestStatus?: UserAttendanceRequestStatus
  displayFooter?: boolean
  display?: 'full' | 'minimal'
}
