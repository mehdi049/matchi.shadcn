'use client'

import Link from 'next/link'
import { LoginFormModal } from '@/features/login/login-form-modal'
import { RegisterFormModal } from '@/features/register/register-form-modal'
import { ROUTES } from '@/routes'
import { useIsMobile } from '@/hooks/use-mobile'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { BellRing, Mail } from 'lucide-react'
import { Button, CnButton } from '../ui/button'
import { AvatarComponent } from '../ui/avatar'

const Navbar = () => {
  const isMobile = useIsMobile()
  const isLoggedIn = true
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
      <nav className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href={ROUTES.HOME}
          className="flex items-center gap-2 text-lg md:text-base font-bold"
        >
          MATCHI
          <span className="sr-only">Matchi</span>
        </Link>
      </nav>

      {isLoggedIn ? (
        <div className="flex w-full items-center justify-end gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <CnButton variant="link" size="icon">
                <BellRing size={16} />
                <span className="sr-only">Toggle notification menu</span>
              </CnButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href={ROUTES.MEMBER.PROFILE}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={ROUTES.MEMBER.PROFILE}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={ROUTES.MEMBER.PROFILE}>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={ROUTES.MEMBER.PROFILE}>Dashboard</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="link" size="icon">
            <Mail size={24} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <CnButton
                variant="secondary"
                size="icon"
                className="rounded-full"
              >
                <AvatarComponent
                  src="https://github.com/shadcn.png"
                  fallback="CN"
                  className="h-10 w-10"
                />
                <span className="sr-only">Toggle user menu</span>
              </CnButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Mehdi Marouani
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    mehdi.marouani@gmail.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href={ROUTES.MEMBER.PROFILE}>
                  <DropdownMenuItem>
                    Dashboard
                    <DropdownMenuShortcut>⇧⌘D</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <Link href={ROUTES.HOME}>
                <DropdownMenuItem>
                  Me deconnecter
                  <DropdownMenuShortcut>⇧⌘M</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex w-full items-center gap-2 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto text-xs md:text-sm">
            <LoginFormModal />
          </div>
          <RegisterFormModal
            buttonVariant="default"
            buttonSize={isMobile ? 'sm' : 'default'}
            className="text-xs md:text-sm px-2 sm:px-4"
          />
        </div>
      )}
    </header>
  )
}

export default Navbar
