import type { Section } from '@/types';

export const paths = {
  login: '/login',
  forgotPassword: '/forgot-password',
  resetVerify: '/reset-password/verify',
  resetPassword: '/reset-password',
  invite: (token: string) => `/invite/${token}`,
  inviteVerify: (token: string) => `/invite/${token}/verify`,
  inviteCreatePassword: (token: string) => `/invite/${token}/create-password`,

  dashboard: '/dashboard',
  notifications: '/notifications',
  settings: '/settings',
  settingsNotifications: '/settings/notifications',
  settingsContent: '/settings/content',
  settingsProfile: '/settings/profile',
  accessDenied: '/access-denied',

  list: (s: Section) => `/${s}`,
  new: (s: Section) => `/${s}/new`,
  detail: (s: Section, id: string) => `/${s}/${id}`,
  edit: (s: Section, id: string) => `/${s}/${id}/edit`,
};
