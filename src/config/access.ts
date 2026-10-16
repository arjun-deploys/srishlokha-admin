import type { Section } from '@/types';

export const DEMO_ROLES = [
  'Super Admin',
  'Inventory Manager',
  'Order Manager',
  'Support Admin',
] as const;
export type DemoRole = (typeof DEMO_ROLES)[number];

export type NavSection = 'dashboard' | Section | 'notifications' | 'settings';

const COMMON: NavSection[] = ['dashboard', 'notifications', 'settings'];

const ACCESS: Record<DemoRole, NavSection[] | 'all'> = {
  'Super Admin': 'all',
  'Inventory Manager': [...COMMON, 'categories', 'products'],
  'Order Manager': [...COMMON, 'orders'],
  'Support Admin': [...COMMON, 'support', 'wholesale'],
};

export const canAccess = (role: DemoRole, section: NavSection) => {
  const allowed = ACCESS[role];
  return allowed === 'all' || allowed.includes(section);
};
