import PrivateActivityBadge from '@/components/badge/private-activty-badge'
import { AvatarComponent } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import FontAwesome from '@/components/ui/font-awesome/font-awesome'
import H2 from '@/components/ui/typography/h2'
import {
  faCalendar,
  faCircleCheck,
  faCompass,
  faMoneyBill1,
} from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import H4 from '../ui/typography/h4'

export default function ActivityDetailsCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-4">
          <div className="flex items-center gap-4 flex-grow">
            <AvatarComponent
              src="https://github.com/shadcn.png"
              fallback="CN"
            />
            <div>
              <p>Mehdi Marouani</p>
              <p className="text-xs text-muted-foreground">Organisateur</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Button size={'sm'}>Rejoindre</Button>
            <PrivateActivityBadge />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center flex-wrap gap-4 mb-4">
          <div>
            <Image
              width={1280}
              height={1114}
              alt={''}
              className="object-cover rounded-xl w-full max-w-xs"
              src={
                'https://iklsbmdx7uxraqfa.public.blob.vercel-storage.com/activity/bTennis-92Z5Y6PqPHxz6MzAQHdu7pDXvrYGOi.webp'
              }
            />
          </div>

          <div>
            <H2>Sidi Bouzid, acidus adeptio repellat</H2>
            <div className="flex flex-col gap-2">
              <p className="text-sm pt-2 flex gap-2 items-center">
                <FontAwesome icon={faCalendar} className="h-4 w-4 opacity-50" />{' '}
                Lundi 17 mars : 17-19h
              </p>
              <p className="text-sm flex gap-2 items-center">
                <FontAwesome icon={faCompass} className="h-4 w-4 opacity-50" />{' '}
                Tunis, Terrain Eddaleli{' '}
                <Link href={''} target="_blank" className="underline text-xs">
                  Voir sur Google Maps
                </Link>
              </p>
              <p className="text-sm flex gap-2 items-center">
                <FontAwesome
                  icon={faCircleCheck}
                  className="h-4 w-4 opacity-50"
                />{' '}
                0 / 12 Participant(s)
              </p>
              <p className="text-sm flex gap-2 items-center">
                <FontAwesome
                  icon={faMoneyBill1}
                  className="h-4 w-4 opacity-50"
                />{' '}
                Gratuit
              </p>
            </div>
          </div>
        </div>

        <H4 className="mt-4 md:mt-8">Plus de detail</H4>
        <p className="mt-2">
          cui tremo curtus urbs creptio delinquo quae absum sunt abeo talio
          decet viduo architecto audeo conicio vinitor antepono triduana usus
          ultio beatus claustrum amo quibusdam territo ventosus aliquam carmen
          virgo crebro voco
        </p>

        <p className="text-xs mt-4 text-muted-foreground">
          Publié le Jeudi 10 oct. 2024, 02:14h
        </p>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}
