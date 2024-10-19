import '../globals.css'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}
