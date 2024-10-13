'use client'

import { Card, CardContent, CardHeader } from '../ui/card'
//import { ActivityCardProps } from './activity-card.type'
import Image from 'next/image'
import H3 from '../ui/typography/h3'
import {
  faCalendar,
  faCircleCheck,
  faCompass,
  faMoneyBill1,
} from '@fortawesome/free-regular-svg-icons'
import FontAwesome from '../ui/font-awesome/font-awesome'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/routes'
import PrivateActivityBadge from '../badge/private-activty-badge'

export default function ActivityCard(/*{
  activity,
  hosting,
  attending,
  requestStatus,
  displayFooter,
  display = 'full',
}: ActivityCardProps*/) {
  const router = useRouter()
  return (
    <Card
      onClick={() => router.push(ROUTES.ACTIVITY(1))}
      className="cursor-pointer"
    >
      <CardHeader className="p-0">
        <Image
          src={
            'https://iklsbmdx7uxraqfa.public.blob.vercel-storage.com/activity/bTennis-92Z5Y6PqPHxz6MzAQHdu7pDXvrYGOi.webp'
          }
          alt={''}
          width={1280}
          height={1114}
          className="rounded-t-xl"
        />
      </CardHeader>
      <CardContent className="p-4 flex flex-col gap-2">
        <div className="flex gap-2 items-start">
          <H3 className="font-semibold">
            Sidi Bouzid, acidus adeptio repellat
          </H3>
          <PrivateActivityBadge />
        </div>

        <p className="text-sm pt-2 flex gap-2 items-center">
          <FontAwesome icon={faCalendar} className="h-4 w-4 opacity-50" /> Lundi
          17 mars : 17-19h
        </p>
        <p className="text-sm flex gap-2 items-center">
          <FontAwesome icon={faCompass} className="h-4 w-4 opacity-50" /> Tunis,
          Terrain Eddaleli
        </p>
        <p className="text-sm flex gap-2 items-center">
          <FontAwesome icon={faCircleCheck} className="h-4 w-4 opacity-50" /> 0
          / 12 Participant(s)
        </p>
        <p className="text-sm flex gap-2 items-center">
          <FontAwesome icon={faMoneyBill1} className="h-4 w-4 opacity-50" />{' '}
          Gratuit
        </p>
        <p className="text-xs">
          Organisé par{' '}
          <Link href="" className="font-medium underline">
            Mehdi Marouani
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
