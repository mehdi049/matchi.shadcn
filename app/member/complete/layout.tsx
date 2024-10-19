import Container from '@/components/ui/container/container'
import Footer from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'

export default function MemberCompleteProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <div>
        <Container size="sm">{children}</Container>
      </div>
      <Footer />
    </>
  )
}
