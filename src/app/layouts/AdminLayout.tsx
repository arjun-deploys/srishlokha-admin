import { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { canAccess } from '@/config/access';
import { NAV_ITEMS } from '@/config/navigation';
import { useRole } from '@/store/RoleProvider';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';

export function AdminLayout() {
  const { pathname } = useLocation();
  const { role } = useRole();
  const [drawer, setDrawer] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const key = pathname.split('/')[1] || 'dashboard';
  const current = NAV_ITEMS.find((n) => n.section === key);
  const navItems = NAV_ITEMS.filter((n) => canAccess(role, n.section));

  return (
    <div className='min-h-[100dvh] bg-[var(--ivory)]'>
      {drawer && (
        <button aria-label='Close navigation' onClick={() => setDrawer(false)} className='fixed inset-0 z-40 bg-black/35 md:hidden' />
      )}
      <Sidebar
        items={navItems}
        collapsed={collapsed}
        drawerOpen={drawer}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        onCloseDrawer={() => setDrawer(false)}
      />
      <div className={`min-h-[100dvh] transition-[padding] duration-200 ${collapsed ? 'md:pl-[76px]' : 'md:pl-[242px]'}`}>
        <Topbar sectionLabel={current?.label ?? 'Overview'} onOpenDrawer={() => setDrawer(true)} />
        <main className='mx-auto max-w-[1500px] px-4 py-6 md:px-8 md:py-8'>
          <Outlet />
        </main>
        <footer className='px-4 pb-6 text-center text-[10px] text-[var(--muted-foreground)] md:px-8'>
          Sri Shloka Admin <span className='mx-1.5'>·</span> Frontend demo workspace <span className='mx-1.5'>·</span> Sample data only
        </footer>
      </div>
    </div>
  );
}
