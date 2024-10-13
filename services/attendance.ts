import { API_ROUTES } from '@/const/api-routes'
import { fetcher } from '@/lib/fetcher'
import {
  UserAttendanceRequestStatus,
  UserAttendanceResponse,
} from '@/types/user-attendance-response.type'

export const addAttendance = (attendance: UserAttendanceResponse) => {
  return fetcher<string>({
    url: API_ROUTES.ATTENDANCE.ADD,
    method: 'POST',
    body: attendance as unknown as BodyInit,
  })
}

export const updateAttendance = (
  userId: string,
  activityId: number,
  status: UserAttendanceRequestStatus
) => {
  return fetcher<string>({
    url: API_ROUTES.ATTENDANCE.GET_BY_ID(userId, activityId),
    method: 'PUT',
    body: {
      status: status,
    } as unknown as BodyInit,
  })
}
