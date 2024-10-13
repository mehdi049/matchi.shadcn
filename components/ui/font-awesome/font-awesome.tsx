import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeProps } from './font-awesome.type'

export default function FontAwesome({
  icon,
  size = 'xs',
  className,
}: FontAwesomeProps) {
  return <FontAwesomeIcon icon={icon} className={className} size={size} />
}
