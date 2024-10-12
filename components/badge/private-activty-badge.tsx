import { faLock } from '@fortawesome/free-solid-svg-icons'
import { Badge } from '../ui/badge'
import FontAwesome from '../ui/font-awesome/font-awesome'

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
      <FontAwesome icon={faLock} /> Privé
    </Badge>
  )
}
