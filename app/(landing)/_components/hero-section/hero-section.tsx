import { SearchForm } from '../../../../features/search-form/search-form'

export default function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: 'url(/bg-home/bg-home.jpg)',
      }}
      className="h-screen bg-center bg-cover -mt-16 flex justify-center items-center px-4"
    >
      <SearchForm design="card" className="w-full md:w-auto relative" />
    </div>
  )
}
