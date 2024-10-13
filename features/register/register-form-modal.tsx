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
import { RegisterFormModalProps } from './register-form-modal.type.ts.jsx'
import FontAwesome from '@/components/ui/font-awesome/font-awesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

export function RegisterFormModal({
  buttonVariant = 'ghost',
  className,
}: RegisterFormModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} className={className}>
          Créer un compte
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Créer un compte</DialogTitle>
          <DialogDescription>
            Créez un compte pour accéder à tous les avantages de notre
            plateforme.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="lname">Nom</Label>
            <Input id="lname" type="text" placeholder="Nom" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="fname">Prénom</Label>
            <Input id="fname" type="text" placeholder="Prénom" required />
          </div>
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
            <Label htmlFor="password">Mot de passe</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Confirmer mon mot de passe</Label>
            <Input id="password" type="password" required />
          </div>

          <Button type="submit" className="w-full">
            Confirmer
          </Button>

          <div className="relative py-2 md:py-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continuer avec
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button variant="outline" className="w-full">
              <p className="w-28 flex gap-2 items-center">
                <FontAwesome icon={faGoogle} className="h-3 w-3" /> Google
              </p>
            </Button>
            <Button variant="outline" className="w-full">
              <p className="w-28 flex gap-2 items-center">
                <FontAwesome icon={faFacebook} className="h-3 w-3" /> Facebook
              </p>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
