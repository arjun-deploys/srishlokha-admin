import { ChevronLeft, ChevronRight, Thermometer, X } from 'lucide-react';
import { NavLink } from 'react-router';
import { Brand } from '@/components/common';
import type { NavItem } from '@/config/navigation';

interface SidebarProps {
  items: NavItem[];
  collapsed: boolean;
  drawerOpen: boolean;
  onToggleCollapse: () => void;
  onCloseDrawer: () => void;
}

export function Sidebar({ items, collapsed, drawerOpen, onToggleCollapse, onCloseDrawer }: SidebarProps) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-[var(--forest-deep)] text-white transition-all duration-200 ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 ${collapsed ? 'md:w-[76px]' : 'md:w-[242px]'} w-[260px]`}
    >
      <div className='flex h-[76px] items-center justify-between border-b border-white/10 px-4'>
        <Brand inverse />
        {!collapsed && (
          <button className='btn btn-quiet !min-h-8 !px-2 text-white md:hidden' aria-label='Close menu' onClick={onCloseDrawer}>
            <X size={17} />
          </button>
        )}
      </div>
      {!collapsed && <div className='px-4 pt-5 pb-2 eyebrow !text-white/45'>Store workspace</div>}
      <nav className='flex-1 space-y-1 px-3 py-2'>
        {items.map((item) => (
          <NavLink
            data-testid={`nav-${item.section}`}
            key={item.href}
            to={item.href}
            onClick={onCloseDrawer}
            title={collapsed ? item.label : undefined}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''} ${collapsed ? 'md:justify-center md:px-0' : ''}`}
          >
            <item.icon size={17} strokeWidth={1.8} />
            {!collapsed && (
              <>
                <span className='flex-1'>{item.label}</span>
                {item.section === 'notifications' && (
                  <span className='rounded-full bg-[var(--terracotta)] px-1.5 text-[10px] text-white'>3</span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      <div className='border-t border-white/10 p-3'>
        {!collapsed && (
          <div className='mb-3 rounded-sm border border-white/10 bg-white/5 p-3'>
            <div className='flex items-center gap-2'>
              <span className='h-2 w-2 rounded-full bg-[var(--gold)]' />
              <span className='text-[11px] font-semibold'>Fresh arrivals</span>
            </div>
            <p className='mt-1.5 text-[10px] leading-4 text-white/55'>Next weekly import · Thu, Mar 21</p>
            <div className='mt-2 flex items-center gap-1 text-[10px] text-white/75'>
              <Thermometer size={12} /> Cold-chain check: 3.8°C
            </div>
          </div>
        )}
        <button data-testid='button-collapse-navigation' onClick={onToggleCollapse} className='nav-link w-full'>
          {collapsed ? (
            <ChevronRight size={17} />
          ) : (
            <>
              <ChevronLeft size={17} />
              <span>Collapse menu</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
