export default function PageContentWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
}
