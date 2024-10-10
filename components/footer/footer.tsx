import Link from 'next/link'
import H3 from '@/components/ui/typography/h3'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import FontAwesome from '@/components/ui/font-awesome/font-awesome'
import Container from '../ui/container/container'
import { Separator } from '../ui/separator'
import { LoginFormModal } from '@/features/login/login-form-modal'
import { RegisterFormModal } from '@/features/register/register-form-modal'

export default function Footer() {
  const currentDate = new Date()
  return (
    <footer className="bg-black py-8 mt-8">
      <Container className="flex flex-wrap flex-col gap-4 sm:gap-8">
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="flex flex-col gap-3">
            <H3 className="text-white">Mon compte</H3>
            <LoginFormModal
              buttonVariant="link"
              className="text-gray-300 p-0 max-w-min h-fit"
            />
            <RegisterFormModal
              buttonVariant="link"
              className="text-gray-300 p-0 max-w-min h-fit"
            />
          </div>
          <div className="flex flex-col gap-3">
            <H3 className="text-white">Matchi</H3>
            <Link className="text-gray-300 text-sm" href="#">
              En savoir plus
            </Link>
            <Link className="text-gray-300 text-sm" href="#">
              Applications
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <H3 className="text-white">Contact</H3>
            <Link className="text-gray-300 text-sm" href="#">
              hello@matchi.tn
            </Link>
            <Link className="text-gray-300 text-sm" href="#">
              14 rue Beffroy 92200 Neuilly-sur-Seine
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <H3 className="text-white">Suivez nous</H3>
            <div className="flex gap-4">
              <Link className="text-gray-300 text-2xl" href="#">
                <FontAwesome icon={faFacebook} />
              </Link>
              <Link className="text-gray-300 text-2xl" href="#">
                <FontAwesome icon={faInstagram} />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        <div className="flex flex-wrap gap-4 sm:gap-8">
          <p className="text-center text-gray-300">
            ©{currentDate.getFullYear()} Matchi
          </p>
          <Link className="text-gray-300 text-sm" href="#">
            Politique de confidentialité
          </Link>
          <Link className="text-gray-300 text-sm" href="#">
            Mentions légales
          </Link>
          <Link className="text-gray-300 text-sm" href="#">
            Utilisation des cookies
          </Link>
          <Link className="text-gray-300 text-sm" href="#">
            Aide
          </Link>
        </div>
      </Container>
    </footer>
  )
}
