import type { LucideIcon } from 'lucide-react';
import {
  Bell,
  Boxes,
  BriefcaseBusiness,
  LayoutDashboard,
  LifeBuoy,
  Package,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Users,
} from 'lucide-react';
import type { NavSection } from './access';

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  section: NavSection;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: '/dashboard', icon: LayoutDashboard, section: 'dashboard' },
  { label: 'Admins', href: '/admins', icon: Users, section: 'admins' },
  { label: 'Roles & access', href: '/roles', icon: ShieldCheck, section: 'roles' },
  { label: 'Categories', href: '/categories', icon: Boxes, section: 'categories' },
  { label: 'Products', href: '/products', icon: Package, section: 'products' },
  { label: 'Orders', href: '/orders', icon: ShoppingCart, section: 'orders' },
  { label: 'Support', href: '/support', icon: LifeBuoy, section: 'support' },
  { label: 'Wholesale', href: '/wholesale', icon: BriefcaseBusiness, section: 'wholesale' },
  { label: 'Notifications', href: '/notifications', icon: Bell, section: 'notifications' },
  { label: 'Settings', href: '/settings', icon: Settings, section: 'settings' },
];
