import { TypographyProps } from './typography.type'

export default function H4({ children, className }: TypographyProps) {
  return <h4 className={'font-medium ' + (className ?? '')}>{children}</h4>
}
