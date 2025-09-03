"use client"

import * as React from "react"
import {
  Frame,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: Frame,
      items: []
    },
    {
      title: "Content",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Sertifikasi",
          url: "/manage/sertifikat",
        },
        {
          title: "Skills",
          url: "/manage/skils",
        },
        {
          title: "Porto Jenis",
          url: "/manage/porto-jenis",
        },
        {
          title: "Portofolios",
          url: "/manage/portofolios",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>

            <SidebarMenu>
              <SidebarMenuItem>
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        J
                      </div>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {"Admin Panel"}
                        </span>
                        <span className="truncate text-xs">{"Justine portofolio."}</span>
                      </div>
                    </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
