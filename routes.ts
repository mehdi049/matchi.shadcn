export const ROUTES = {
  HOME: '/',

  ACTIVITY: (id: number) => '/activity/' + id,
  ACTIVITIES_SEARCH: (
    city: string,
    activity: string = 'all',
    date: string = ''
  ) => '/search/' + city + '/' + activity + '/' + date,

  PROFILE: (id: string) => '/profiles/' + id,
  PROFILES: '/profiles',

  MEMBER: {
    COMPLETE_PROFILE: '/member/complete',
    PROFILE: '/member/profile',
    ACTIVITIES: {
      CREATED: '/member/activities/created',
      GOING: '/member/activities/going',
      HISTORY: '/member/activities/history',
    },
    ACTIVITY: {
      ADD: '/member/activity/add',
      EDIT: (id: number) => '/member/activity/edit/' + id,
    },
    MY_REQUESTS: '/member/requests',
    MY_REVIEWS: '/member/reviews',
    MESSAGES: '/member/messages',
    ACCOUNT: '/member/account',
  },
}
