import Link from "next/link";

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
import { LoginFormModalProps } from "./login-form-modal.type.ts";
import { RegisterFormModal } from "../register/register-form-modal";

export function LoginFormModal({
  buttonVariant = "ghost",
  className,
}: LoginFormModalProps) {
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
          <Button type="submit" className="w-full">
            Me connecter
          </Button>
          <Button variant="outline" className="w-full">
            Me connecter avec Google
          </Button>
          <Button variant="outline" className="w-full">
            Me connecter avec Facebook
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Vous n&apos;aver pas de compte? {""}
          <RegisterFormModal
            buttonVariant="link"
            className="underline p-0 max-w-min h-fit"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
