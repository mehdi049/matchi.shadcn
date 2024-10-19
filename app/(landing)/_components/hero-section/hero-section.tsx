import Image from 'next/image'
import { SearchForm } from '../../../../features/search-form/search-form'

export default function HeroSection() {
  return (
    <div className="h-screen -mt-16 flex justify-center items-center px-4">
      <Image
        src={'/bg-home/bg-home.jpg'}
        alt={''}
        width={800}
        height={800}
        className="absolute left-0 right-0 h-full w-full object-cover z-0"
      />
      <SearchForm design="card" className="w-full md:w-auto relative" />
    </div>
  )
}
