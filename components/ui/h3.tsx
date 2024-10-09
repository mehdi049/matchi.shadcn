import { TypographyProps } from "./typography/typography.type";

export function H3({ children, className }: TypographyProps) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      The Joke Tax
    </h3>
  );
}
