import { AddedActivityResponseSm } from './added-activity-response.type'
import { UserAttendanceResponse } from './user-attendance-response.type'
import { UserInterestResponse } from './user-interest-response.type'

export type UserResponse = {
  id: string
  name: string
  email: string
  image: string
  birthDay: Date
  bio: string
  gender: string
  country: string
  city: string
  municipality: string
  createdAt: Date
  updatedAt: Date

  addedActivities?: AddedActivityResponseSm[]
  interests?: UserInterestResponse[]
  userAttendance?: UserAttendanceResponse[]
}

export type UserResponseSm = {
  id: string
  name: string
  image: string
  userAttendance?: UserAttendanceResponse[]
}
