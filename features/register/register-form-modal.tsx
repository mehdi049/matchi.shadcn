import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RegisterFormModalProps } from "./register-form-modal.type.ts.jsx";

export function RegisterFormModal({
  buttonVariant = "ghost",
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
          <Button variant="outline" className="w-full">
            Continuer avec Google
          </Button>
          <Button variant="outline" className="w-full">
            Continuer avec Facebook
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
