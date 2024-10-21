import PageBreadcrumb from './breadcrumb'

type PageContentWrapperProps = {
  children: React.ReactNode
  pageParent?: string
  pageName: string
}
export default function PageContentWrapper({
  children,
  pageParent,
  pageName,
}: PageContentWrapperProps) {
  return (
    <>
      <div className="sticky top-16 bg-white z-50 border-b border-gray-100 mb-4">
        <PageBreadcrumb pageParent={pageParent} pageName={pageName} />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
    </>
  )
}
