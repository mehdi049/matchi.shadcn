import { Badge } from '../ui/badge'
import { Lock } from 'lucide-react'

export default function PrivateActivityBadge({
  className,
}: {
  className?: string
}) {
  return (
    <Badge
      variant="secondary"
      className={`flex gap-2 items-center max-w-min ${className}`}
    >
      <Lock size={12} /> Privé
    </Badge>
  )
}
