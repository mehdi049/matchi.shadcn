'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { LoginFormModalProps } from './login-form-modal.type.ts'
import { RegisterFormModal } from '../register/register-form-modal'
import FontAwesome from '@/components/ui/font-awesome/font-awesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/routes'

export function LoginFormModal({
  buttonVariant = 'ghost',
  className,
}: LoginFormModalProps) {
  const router = useRouter()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} className={className}>
          Me connecter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Me connecter</DialogTitle>
          <DialogDescription>
            Connectez-vous pour accéder à votre compte.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@exemple.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Mot de passe</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Mot de passe oublié?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button
            type="submit"
            className="w-full"
            onClick={() => router.push(ROUTES.MEMBER.COMPLETE_PROFILE)}
          >
            Me connecter
          </Button>
          <div className="relative py-2 md:py-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => router.push(ROUTES.MEMBER.COMPLETE_PROFILE)}
            >
              <p className="flex gap-2 items-center">
                <FontAwesome icon={faGoogle} className="h-3 w-3" /> Contiuner
                avec Google
              </p>
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => router.push(ROUTES.MEMBER.COMPLETE_PROFILE)}
            >
              <p className="flex gap-2 items-center">
                <FontAwesome icon={faFacebook} className="h-3 w-3" /> Continuer
                avec Facebook
              </p>
            </Button>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          Vous n&apos;aver pas de compte? {''}
          <RegisterFormModal
            buttonVariant="link"
            className="underline p-0 max-w-min h-fit"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
