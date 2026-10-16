import type { Section } from '@/types';

export interface SectionMeta {
  title: string;
  description: string;
  singular: string;
  cta?: string;
}

export const SECTION_META: Record<Section, SectionMeta> = {
  admins: {
    title: 'Manage admins',
    description: 'People trusted with the daily care of Sri Shloka.',
    singular: 'admin',
    cta: 'Create admin',
  },
  roles: {
    title: 'Roles & access',
    description: 'Thoughtful access for the people behind each part of the store.',
    singular: 'role',
    cta: 'Create role',
  },
  categories: {
    title: 'Categories',
    description: 'Keep fresh arrivals and devotional essentials easy to find.',
    singular: 'category',
    cta: 'Create category',
  },
  products: {
    title: 'Products',
    description: 'Catalog, freshness and inventory in one considered view.',
    singular: 'product',
    cta: 'Add product',
  },
  orders: {
    title: 'Orders',
    description: 'Follow each offering from checkout to its regional handoff.',
    singular: 'order',
  },
  support: {
    title: 'Enquiries & support',
    description: 'Care for every question with the same attention as every flower.',
    singular: 'enquiry',
  },
  wholesale: {
    title: 'Wholesale enquiries',
    description: 'Build lasting relationships with temples and independent retailers.',
    singular: 'enquiry',
  },
};

export const PERMISSION_OPTIONS = ['Users', 'Categories', 'Products', 'Orders', 'Payments'];
