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

import { NavMain } from '@/app/member/(dashboard)/_components/sidebar/nav-main'
import { Sidebar, SidebarContent, SidebarRail } from '@/components/ui/sidebar'
import { NavAccount } from './nav-account'
import { NavSignout } from './nav-signout'
import { ROUTES } from '@/routes'

const data = {
  navMain: [
    {
      title: 'Créer une activité',
      url: ROUTES.MEMBER.ACTIVITY.ADD,
      icon: Plus,
      isActive: true,
    },
    {
      title: 'Mes activités',
      url: ROUTES.MEMBER.ACTIVITIES.CREATED,
      icon: Heart,
      items: [
        {
          title: "Que j'ai crée",
          url: ROUTES.MEMBER.ACTIVITIES.CREATED,
        },
        {
          title: 'Que je vais assister',
          url: ROUTES.MEMBER.ACTIVITIES.GOING,
        },
        {
          title: 'Historique',
          url: ROUTES.MEMBER.ACTIVITIES.HISTORY,
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
      url: ROUTES.MEMBER.MESSAGES,
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
      url: ROUTES.MEMBER.PROFILE,
      icon: UserRoundPen,
    },
    {
      title: 'Mon compte',
      url: ROUTES.MEMBER.ACCOUNT,
      icon: CircleUser,
    },
  ],

  navLogout: {
    title: 'Me deconnecter',
    icon: LogOut,
  },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="pt-16">
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavAccount items={data.navAccount} />
        <NavSignout item={data.navLogout} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
