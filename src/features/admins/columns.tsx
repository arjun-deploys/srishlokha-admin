import { Link } from 'react-router';
import { Avatar, Status } from '@/components/common';
import { paths } from '@/app/router/paths';
import type { Admin, Column } from '@/types';

export const adminColumns: Column<Admin>[] = [
  {
    header: 'Admin',
    cell: (r) => (
      <Link to={paths.detail('admins', r.id)} className='flex items-center gap-2.5'>
        <Avatar name={r.name} />
        <span className='font-semibold'>{r.name}</span>
      </Link>
    ),
  },
  { header: 'Email', className: 'text-xs text-[var(--muted-foreground)]', cell: (r) => r.email },
  { header: 'Assigned role', className: 'text-xs', cell: (r) => r.role },
  { header: 'Account status', cell: (r) => <Status>{r.status}</Status> },
  { header: 'Invitation', className: 'text-[11px] text-[var(--muted-foreground)]', cell: (r) => r.invitation },
  { header: 'Created', className: 'text-xs text-[var(--muted-foreground)]', cell: (r) => r.createdAt },
];
