import { Bell, FileText, Store, UserRound } from 'lucide-react';
import { NavLink, Outlet } from 'react-router';
import { PageHead } from '@/components/common';
import { paths } from '@/app/router/paths';
import { SettingsProvider } from '../SettingsContext';

const LINKS = [
  { label: 'Store information', to: paths.settings, icon: Store, end: true },
  { label: 'Notifications', to: paths.settingsNotifications, icon: Bell },
  { label: 'Storefront content', to: paths.settingsContent, icon: FileText },
  { label: 'Admin profile', to: paths.settingsProfile, icon: UserRound },
];

export function SettingsLayout() {
  return (
    <SettingsProvider>
      <div className='fade-in'>
        <PageHead
          title='Settings'
          description='Keep the store details, team preferences and storefront voice in good order.'
          eyebrow='Workspace'
        />
        <div className='grid gap-5 lg:grid-cols-[210px_1fr]'>
          <aside className='panel h-fit p-2'>
            {LINKS.map(({ label, to, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 px-3 py-2.5 text-xs ${isActive ? 'bg-[var(--sand)] font-semibold text-[var(--forest)]' : 'text-[var(--muted-foreground)] hover:bg-[var(--ivory)]'}`
                }
              >
                <Icon size={15} />
                {label}
              </NavLink>
            ))}
          </aside>
          <Outlet />
        </div>
      </div>
    </SettingsProvider>
  );
}
