import { TypographyProps } from "./typography.type";

export default function H2({ children, className }: TypographyProps) {
  return <h3 className={"text-xl " + (className ?? "")}>{children}</h3>;
}
