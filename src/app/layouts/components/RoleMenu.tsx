import { useState } from 'react';
import { Check, ChevronDown, LogOut, Settings } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Avatar } from '@/components/common';
import { paths } from '@/app/router/paths';
import { DEMO_ROLES } from '@/config/access';
import { DEMO_USER } from '@/config/demo';
import { useRole } from '@/store/RoleProvider';

/** User menu with the demo "preview as role" switcher. Route access is enforced by <RoleGuard>. */
export function RoleMenu() {
  const navigate = useNavigate();
  const { role, setRole, clearRole } = useRole();
  const [open, setOpen] = useState(false);

  return (
    <div className='relative'>
      <button
        data-testid='button-demo-role'
        onClick={() => setOpen(!open)}
        className='flex items-center gap-2 border-l border-[var(--border)] pl-3 text-left'
      >
        <Avatar name={DEMO_USER.name} />
        <span className='hidden sm:block'>
          <span className='block text-xs font-semibold'>{DEMO_USER.name}</span>
          <span className='block text-[10px] text-[var(--muted-foreground)]'>{role} · demo</span>
        </span>
        <ChevronDown size={14} className='hidden text-[var(--muted-foreground)] sm:block' />
      </button>
      {open && (
        <div className='absolute right-0 top-12 z-50 w-56 border border-[var(--border)] bg-[var(--card)] p-2 shadow-lg'>
          <p className='px-2 py-1 eyebrow'>Preview as role</p>
          {DEMO_ROLES.map((r) => (
            <button
              key={r}
              onClick={() => {
                setRole(r);
                setOpen(false);
              }}
              className='flex w-full items-center justify-between px-2 py-2 text-left text-xs hover:bg-[var(--sand)]'
            >
              {r}
              {r === role && <Check size={14} />}
            </button>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              navigate(paths.settingsProfile);
            }}
            className='mt-1 flex w-full items-center gap-2 border-t border-[var(--border)] px-2 pt-2 text-xs'
          >
            <Settings size={14} /> Profile & settings
          </button>
          <button
            onClick={() => {
              clearRole();
              navigate(paths.login);
            }}
            className='flex w-full items-center gap-2 px-2 py-2 text-xs'
          >
            <LogOut size={14} /> Sign out
          </button>
        </div>
      )}
    </div>
  );
}
