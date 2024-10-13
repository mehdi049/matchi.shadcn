import ActivityHorizontalCard from '@/components/activityCard/activity-horizontal-card'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

export function ActivityDetailsSidebar() {
  return (
    <div className="w-full md:max-w-sm flex gap-4 flex-col">
      <Card>
        <CardHeader>
          <CardTitle>Autre activités sur Grand Tunis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            {[...Array(4).keys()].map((x, i) => (
              <ActivityHorizontalCard key={i} /*activity={activity}*/ />
            ))}
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Activités similaires</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            {[...Array(4).keys()].map((x, i) => (
              <ActivityHorizontalCard key={i} /*activity={activity}*/ />
            ))}
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  )
}
