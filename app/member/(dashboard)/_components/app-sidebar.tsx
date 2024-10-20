'use client'

import * as React from 'react'
import {
  Send,
  LogOut,
  Plus,
  Heart,
  MessageSquareQuote,
  Mail,
  BellRing,
  UserRoundPen,
  CircleUser,
} from 'lucide-react'

import { NavMain } from '@/app/member/(dashboard)/_components/nav-main'
import { NavUser } from '@/app/member/(dashboard)/_components/nav-user'
import { LogoHeader } from '@/app/member/(dashboard)/_components/logo-header'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavAccount } from './nav-account'
import { NavSignout } from './nav-signout'

// This is sample data.
const data = {
  navMain: [
    {
      title: 'Créer une activité',
      url: '#',
      icon: Plus,
      isActive: true,
    },
    {
      title: 'Mes activités',
      url: '#',
      icon: Heart,
      items: [
        {
          title: "Que j'ai crée",
          url: '#',
        },
        {
          title: 'Que je vais assister',
          url: '#',
        },
        {
          title: 'Historique',
          url: '#',
        },
      ],
    },
    {
      title: 'Mes demandes',
      url: '#',
      icon: Send,
      items: [
        {
          title: 'En cours',
          url: '#',
        },
        {
          title: 'Historique',
          url: '#',
        },
      ],
    },
    {
      title: 'Avis',
      url: '#',
      icon: MessageSquareQuote,
      items: [
        {
          title: 'Reçus',
          url: '#',
        },
        {
          title: 'Donné',
          url: '#',
        },
      ],
    },
    {
      title: 'Messages',
      url: '#',
      icon: Mail,
    },
    {
      title: 'Notification',
      url: '#',
      icon: BellRing,
    },
  ],

  navAccount: [
    {
      title: 'Mon profile',
      url: '#',
      icon: UserRoundPen,
    },
    {
      title: 'Mon compte',
      url: '#',
      icon: CircleUser,
    },
  ],

  navLogout: {
    title: 'Me deconnecter',
    url: '#',
    icon: LogOut,
  },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <LogoHeader />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavAccount items={data.navAccount} />
        <NavSignout item={data.navLogout} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
