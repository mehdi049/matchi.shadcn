import { TypographyProps } from './typography.type'

export default function H3({ children, className }: TypographyProps) {
  return (
    <h3 className={'text-lg font-semibold ' + (className ?? '')}>{children}</h3>
  )
}
