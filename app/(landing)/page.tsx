import { SearchForm } from './_components/search-form'

export default function Home() {
  return (
    <div
      style={{ backgroundImage: 'url(/bg-home/bg-home.jpg)' }}
      className="h-screen bg-center bg-cover -mt-16 flex justify-center items-center px-4"
    >
      <SearchForm />
    </div>
  )
}
