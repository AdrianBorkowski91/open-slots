import Link from "next/link";
import Image from "next/image";
import { Calendar, CalendarDays, History, Home, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/public" aria-label="OpenSlots – strona główna">
          <Image
            src="/openslots-logo.svg"
            alt="OpenSlots logo"
            width={220}
            height={48}
            className="w-full h-auto"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size={"lg"} render={<Link href="/public" />}>
              <CalendarDays />
              Katalog wydarzeń
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              size={"lg"}
              render={<Link href="/my-registrations" />}
            >
              <Home />
              Moje zapisy
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton size={"lg"} render={<Link href="/history" />}>
              <History />
              Historia uczestnictwa
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton size={"lg"} render={<Link href="/my-events" />}>
              <Calendar />
              Moje wydarzenia
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton size={"lg"} render={<Link href="/profile" />}>
              <User />
              Profil i ustawienia
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
