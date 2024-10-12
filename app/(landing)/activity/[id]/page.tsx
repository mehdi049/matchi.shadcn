import ActivityDetailsCard from '../_components/activity-details-card'

export default function Page({ params }: { params: { id: string } }) {
  const activityId = params.id

  return (
    <>
      <div className="w-full">
        <ActivityDetailsCard />
      </div>
      <div></div>
    </>
  )
}
