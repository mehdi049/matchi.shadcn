import ActivityCard from '@/components/activityCard/activity-card'
import HeroSection from './_components/hero-section/hero-section'
import {
  ADDED_ACTIVITY_STATUS,
  AddedActivityResponse,
} from '@/types/AddedActivityResponse'
import Container from '@/components/ui/container/container'
import H1 from '@/components/ui/typography/h1'

export default function Home() {
  return (
    <>
      <HeroSection />

      <Container className="mt-8">
        <H1>Activités à venir</H1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {[...Array(8).keys()].map((x, i) => (
            <ActivityCard key={i} /*activity={activity}*/ />
          ))}
        </div>
      </Container>
    </>
  )
}
