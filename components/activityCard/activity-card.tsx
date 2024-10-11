import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { ActivityCardProps } from './activity-card.type'
import Image from 'next/image'
import { AvatarComponent } from '../ui/avatar'
import H2 from '../ui/typography/h2'
import H3 from '../ui/typography/h3'
import { Separator } from '../ui/separator'
import {
  faCalendar,
  faCircleCheck,
  faCompass,
  faMoneyBill1,
} from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import FontAwesome from '../ui/font-awesome/font-awesome'
import Link from 'next/link'
import { Badge } from '../ui/badge'

export default function ActivityCard({
  activity,
  hosting,
  attending,
  requestStatus,
  displayFooter,
  display = 'full',
}: ActivityCardProps) {
  const aspectRatio = 'aspect-square'
  return (
    <Card>
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
          <Badge
            variant="secondary"
            className="flex gap-2 items-center max-w-min"
          >
            <FontAwesome icon={faLock} /> Privé
          </Badge>
        </div>

        <p className="text-sm pt-2 flex gap-2 items-center">
          <FontAwesome icon={faCalendar} className="h-4 w-4 opacity-50" /> Lundi
          17 mars - 17h
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
      {/*}
      <Separator />
      
      <CardFooter className="flex gap-2 items-center justify-start py-2 px-4">
        <div>
          <AvatarComponent src="https://github.com/shadcn.png" fallback="CN" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm">Mehdi Marouani</p>
          <p className="text-xs text-muted-foreground">Organisateur</p>
        </div>
      </CardFooter>
      */}
    </Card>
  )
}
