import ActivityDetailsCard from '../../../../components/activityCard/activity-details-card'
import { ActivityDetailsSidebar } from './activity-details-sidebar'

export default function Page(/*{ params }: { params: { id: string } }*/) {
  //const activityId = params.id

  return (
    <>
      <div className="w-full">
        <ActivityDetailsCard />
      </div>
      <ActivityDetailsSidebar />
    </>
  )
}
