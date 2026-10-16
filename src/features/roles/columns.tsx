import { Link } from 'react-router';
import { Status } from '@/components/common';
import { paths } from '@/app/router/paths';
import type { Column, Role } from '@/types';

export const roleColumns: Column<Role>[] = [
  {
    header: 'Role',
    cell: (r) => (
      <Link to={paths.detail('roles', r.id)} className='font-semibold text-[var(--forest)]'>
        {r.name}
      </Link>
    ),
  },
  { header: 'Description', className: 'max-w-[220px] truncate text-xs text-[var(--muted-foreground)]', cell: (r) => r.description },
  { header: 'Admins', className: 'text-xs', cell: (r) => r.admins ?? 0 },
  { header: 'Permissions', className: 'text-xs', cell: (r) => `${r.permissions?.length ?? 0} permissions` },
  { header: 'Status', cell: (r) => <Status>{r.status}</Status> },
  { header: 'Created', className: 'text-xs text-[var(--muted-foreground)]', cell: (r) => r.createdAt ?? 'Mar 20, 2024' },
];
