'use client'

import { Button } from '@/components/ui/button'
import { StepProps } from './steps.types'
import H3 from '@/components/ui/typography/h3'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { UserInterestResponse } from '@/types/user-interest-response.type'
import { toast } from 'sonner'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ROUTES } from '@/routes'
import { CircleCheck } from 'lucide-react'

export default function InterestsForm({ setStep }: StepProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter()

  const [selectedActivities, setSelectedActivities] = useState<number[]>([])

  const handleAddRemoveActivity = (activityId: number) => {
    if (activityId) {
      let _selectedActivities = [...selectedActivities]

      //if selected
      if (_selectedActivities.includes(activityId))
        _selectedActivities = _selectedActivities.filter(
          (x) => x !== activityId
        )
      //if not selected
      else _selectedActivities.push(activityId)

      setSelectedActivities(_selectedActivities)
    }
  }

  const handleNextStep = () => {
    if (selectedActivities.length > 0) {
      const userInterests: UserInterestResponse[] = []
      selectedActivities.map((activity) => {
        userInterests.push({
          activityId: activity,
        })
      })

      /*mutate({
        id: user.id,
        user: {
          ...user,
          interests: userInterests,
        },
        updateInterests: true,
      })*/

      setStep(4)
      setTimeout(() => {
        router.push(ROUTES.MEMBER.PROFILE)
      }, 1000)
    } else toast.error('Veuillez sélectionner au moins une activité.')
  }

  return (
    <>
      <H3>Mes centres d&apos;intérét</H3>
      <p className="text-sm">
        Veuillez sélectionnez{' '}
        <span className="underline">au moin une activité.</span>
      </p>
      <div className="flex gap-2 flex-wrap mt-4">
        {[...Array(13).keys()].map((activity, i) => {
          return (
            <div
              className="inline-block cursor-pointer"
              key={i}
              onClick={() => handleAddRemoveActivity(/*activity.id*/ activity)}
            >
              {selectedActivities.includes(/*activity.id*/ activity) ? (
                <Badge
                  onClick={() =>
                    handleAddRemoveActivity(/*activity.id*/ activity)
                  }
                  className="p-2"
                >
                  <CircleCheck className="mr-1 w-3 h-3" /> Padel
                </Badge>
              ) : (
                <Badge
                  variant={'outline'}
                  onClick={() =>
                    handleAddRemoveActivity(/*activity.id*/ activity)
                  }
                  className="p-2"
                >
                  Padel
                </Badge>
              )}
            </div>
          )
        })}
      </div>
      <div className="flex gap-4 justify-between mt-8">
        <Button variant="secondary" onClick={() => setStep(2)}>
          Retour
        </Button>
        <Button onClick={handleNextStep}>Continuer</Button>
      </div>
    </>
  )
}
