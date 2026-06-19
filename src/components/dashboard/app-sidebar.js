import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { getUserSession } from "@/lib/core/session"
import { ChartLineArrowUp, ClockArrowRotateLeft, FileDollar, LayoutCellsLarge, LayoutSideContent, PersonFill, Persons, TagDollar } from "@gravity-ui/icons"
import { SquarePlus } from "lucide-react"
import Link from "next/link"
import { redirect } from "next/navigation"

const userNavItems = [
    { href: '/dashboard/user', label: 'Dashboard', icon: LayoutSideContent },
    { href: '/dashboard/user/purchase-history', label: 'Purchase History', icon: ClockArrowRotateLeft },
    { href: '/dashboard/user/bought-artworks', label: 'Bought Artworks', icon: FileDollar },
    { href: '/dashboard/user/profile', label: 'Profile Management', icon: PersonFill },
]

const artistNavItems = [
    { href: '/dashboard/artist', label: 'Dashboard', icon: LayoutSideContent },
    { href: '/dashboard/artist/manage-artworks', label: 'Manage Artworks', icon: LayoutCellsLarge },
    { href: '/dashboard/artist/manage-artworks/add', label: 'Add Artwork', icon: SquarePlus },
    { href: '/dashboard/artist/sales-history', label: 'Sales History', icon: ClockArrowRotateLeft },
    { href: '/dashboard/artist/profile', label: 'Profile Management', icon: PersonFill },
]

const adminNavItems = [
    { href: '/dashboard/admin', label: 'Dashboard', icon: LayoutSideContent },
    { href: '/dashboard/admin/manage-users', label: 'Manage Users', icon: Persons },
    { href: '/dashboard/admin/manage-artworks', label: 'Manage All Artworks', icon: LayoutCellsLarge },
    { href: '/dashboard/admin/transactions', label: 'View All Transactions', icon: TagDollar },
    { href: '/dashboard/admin/analytics', label: 'Analytics Overview', icon: ChartLineArrowUp },
]

const allNavItems = {
    user: userNavItems,
    admin: adminNavItems,
    artist: artistNavItems
}

export async function AppSidebar() {
    const user = await getUserSession()
    if (!user) {
        redirect('/sign-in')
    }
    const navItems = allNavItems[user?.role]
    return (
        <Sidebar>
            <SidebarHeader>
                <p>
                    Profile Info
                </p>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {
                            navItems.map((ni, ind) => <SidebarMenuItem key={ind}>
                                <SidebarMenuButton>
                                    <Link className="flex items-center gap-2" href={ni.href}>
                                        <ni.icon /> {ni.label}
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>)
                        }
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}