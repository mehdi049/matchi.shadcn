import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './_components/sidebar/app-sidebar'
import Navbar from '@/components/navbar/navbar'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>{children}</SidebarInset>
      </SidebarProvider>
    </>
  )
}
