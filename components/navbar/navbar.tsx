'use client'

import Link from 'next/link'
import { LoginFormModal } from '@/features/login/login-form-modal'
import { RegisterFormModal } from '@/features/register/register-form-modal'
import { ROUTES } from '@/routes'
import { useIsMobile } from '@/hooks/use-mobile'

const Navbar = () => {
  const isMobile = useIsMobile()
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
      <nav className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href={ROUTES.HOME}
          className="flex items-center gap-2 text-lg md:text-base font-bold"
        >
          {/*<Package2 className="h-6 w-6" />*/}
          MATCHI
          <span className="sr-only">Matchi</span>
        </Link>
      </nav>
      {/* 
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link href="#" className="hover:text-foreground">
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Orders
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Customers
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
          >
            Analytics
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
    */}
      <div className="flex w-full items-center gap-2 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto text-xs md:text-sm">
          <LoginFormModal />
        </div>
        <RegisterFormModal
          buttonVariant="default"
          buttonSize={isMobile ? 'sm' : 'default'}
          className="text-xs md:text-sm px-2 sm:px-4"
        />

        {/* 
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      */}
      </div>
    </header>
  )
}

export default Navbar
