import { ADDED_ACTIVITY_TYPE } from '@/types/added-activity-response.type'

export const ACTIVITY_TYPE_OPTIONS = [
  {
    value: ADDED_ACTIVITY_TYPE.PUBLIC,
    label: 'Public (Ouvert à tout le monde)',
  },
  {
    value: ADDED_ACTIVITY_TYPE.PRIVATE,
    label: 'Privée (Seulement par invitation)',
  },
]
