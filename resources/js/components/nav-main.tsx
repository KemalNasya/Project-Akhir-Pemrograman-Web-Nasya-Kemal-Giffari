import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={page.url.startsWith(item.href)} tooltip={{ children: item.title }}>
                            <Link href={item.href} prefetch>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}

// import {
//     SidebarGroup,
//     SidebarGroupLabel,
//     SidebarMenu,
//     SidebarMenuButton,
//     SidebarMenuItem,
// } from '@/components/ui/sidebar';
// import { type NavItem } from '@/types';
// import { Link, usePage } from '@inertiajs/react';

// export function NavMain({ items = [] }: { items: NavItem[] }) {
//     const page = usePage();

//     return (
//         <SidebarGroup className="px-2 py-0">
//             <SidebarGroupLabel className="text-[#5c3a21] dark:text-gray-300">
//                 Platform
//             </SidebarGroupLabel>

//             <SidebarMenu>
//                 {items.map((item) => (
//                     <SidebarMenuItem key={item.title}>
//                         <SidebarMenuButton
//                             asChild
//                             isActive={page.url.startsWith(item.href)}
//                             tooltip={{ children: item.title }}
//                         >
//                             <Link href={item.href} prefetch className="flex items-center gap-2">
//                                 {/* Icon dengan warna nuansa batik */}
//                                 {item.icon && (
//                                     <item.icon className="size-4 text-[#5c3a21] dark:text-gray-300" />
//                                 )}

//                                 {/* Teks judul menu */}
//                                 <span className="font-semibold text-sm text-[#5c3a21] dark:text-gray-200">
//                                     {item.title}
//                                 </span>
//                             </Link>
//                         </SidebarMenuButton>
//                     </SidebarMenuItem>
//                 ))}
//             </SidebarMenu>
//         </SidebarGroup>
//     );
// }
