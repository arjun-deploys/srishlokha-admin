import { Bell, Menu } from 'lucide-react';
import { Link } from 'react-router';
import { Brand } from '@/components/common';
import { paths } from '@/app/router/paths';
import { RoleMenu } from './RoleMenu';
import { SearchBox } from './SearchBox';

export function Topbar({ sectionLabel, onOpenDrawer }: { sectionLabel: string; onOpenDrawer: () => void }) {
  return (
    <header className='sticky top-0 z-30 flex h-[68px] items-center justify-between border-b border-[var(--border)] bg-[var(--ivory)]/95 px-4 backdrop-blur md:px-8'>
      <div className='flex items-center gap-3'>
        <button onClick={onOpenDrawer} aria-label='Open navigation' className='btn btn-quiet !px-2 md:hidden'>
          <Menu size={19} />
        </button>
        <div className='hidden text-xs text-[var(--muted-foreground)] sm:block'>
          Store operations <span className='px-2 text-[var(--border)]'>/</span>
          <span className='text-[var(--charcoal)]'>{sectionLabel}</span>
        </div>
        <div className='sm:hidden'>
          <Brand />
        </div>
      </div>
      <div className='flex items-center gap-1 sm:gap-3'>
        <SearchBox />
        <Link
          to={paths.notifications}
          aria-label='Notifications'
          className='relative flex h-9 w-9 items-center justify-center text-[var(--muted-foreground)] hover:bg-[var(--sand)]'
        >
          <Bell size={18} />
          <span className='absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[var(--terracotta)]' />
        </Link>
        <RoleMenu />
      </div>
    </header>
  );
}
