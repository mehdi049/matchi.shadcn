import { TypographyProps } from './typography.type'

export default function H2({ children, className }: TypographyProps) {
  return (
    <h3 className={'text-lg md:text-xl font-semibold ' + (className ?? '')}>
      {children}
    </h3>
  )
}
