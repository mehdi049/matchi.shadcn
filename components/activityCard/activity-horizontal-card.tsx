'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/routes'
import H5 from '../ui/typography/h5'

export default function ActivityHorizontalCard(/*{
  activity,
}: ActivityCardProps*/) {
  const router = useRouter()
  return (
    <div
      className="flex gap-2 items-start cursor-pointer"
      onClick={() => router.push(ROUTES.ACTIVITY(1))}
    >
      <Image
        src={
          'https://iklsbmdx7uxraqfa.public.blob.vercel-storage.com/activity/bTennis-92Z5Y6PqPHxz6MzAQHdu7pDXvrYGOi.webp'
        }
        alt={''}
        width={1280}
        height={1114}
        className="h-12 w-12 rounded-full"
      />
      <div className="flex flex-col">
        <H5>Sidi Bouzid, acidus adeptio repellat</H5>
        <p className="text-xs">Terrain Eddaleli</p>
        <p className="text-xs text-muted-foreground">Lundi 17 mars : 17-19h</p>
      </div>
    </div>
  )
}
