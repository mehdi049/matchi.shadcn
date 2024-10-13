import { TypographyProps } from './typography.type'

export default function H5({ children, className }: TypographyProps) {
  return (
    <h5 className={'text-sm font-medium ' + (className ?? '')}>{children}</h5>
  )
}
