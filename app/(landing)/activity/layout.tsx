import Container from '@/components/ui/container/container'

export default function ActivityDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container className="mt-8">
      <div className="flex flex-wrap md:flex-nowrap gap-12 lg:gap-24">
        {children}
      </div>
    </Container>
  )
}
