'use client'

import { type LucideIcon } from 'lucide-react'

import { SidebarGroup, SidebarMenuButton } from '@/components/ui/sidebar'
import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/routes'

export function NavSignout({
  item,
}: {
  item: {
    title: string
    url: string
    icon?: LucideIcon
  }
}) {
  const router = useRouter()
  return (
    <SidebarGroup>
      <Collapsible key={item.title} asChild className="group/collapsible">
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            variant={'destructive'}
            onClick={() => router.push(ROUTES.HOME)}
          >
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </SidebarMenuButton>
        </CollapsibleTrigger>
      </Collapsible>
    </SidebarGroup>
  )
}
