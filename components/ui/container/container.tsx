import { ContainerProps } from "./container.type";

export default function Container({
  children,
  size = "lg",
  className,
}: ContainerProps) {
  return (
    <>
      <div
        className={
          "mx-auto p-4 " +
          (className ?? "") +
          (size === "lg" ? " max-w-7xl" : "max-w-3xl")
        }
      >
        {children}
      </div>
    </>
  );
}
