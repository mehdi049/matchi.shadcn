import ActivityCard from '@/components/activityCard/activity-card'
import Container from '@/components/ui/container/container'
import { SearchForm } from '../../../../features/search-form/search-form'
import H4 from '@/components/ui/typography/h4'

export default function SearchActivities(/*{
  params,
}: {
  params: { slug: string[] }
}*/) {
  /*const city = slugifyString(decodeURI(params.slug[0]))
  const activitySlug = slugifyString(decodeURI(params.slug[1]))
  const date = slugifyString(params.slug[2])*/

  return (
    <Container className="mt-8">
      <SearchForm design="simple" />
      <div className="mt-8 md:mt-16">
        <H4>
          Activité disponible sur <span className="underline">Grand Tunis</span>{' '}
          le <span className="underline">Lundi, 1 Décembre</span>
        </H4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {[...Array(8).keys()].map((x, i) => (
            <ActivityCard key={i} /*activity={activity}*/ />
          ))}
        </div>
      </div>
    </Container>
  )
}
