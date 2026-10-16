import { Link } from 'react-router';
import { Botanical, Status } from '@/components/common';
import { paths } from '@/app/router/paths';
import type { Category, Column } from '@/types';

export const categoryColumns: Column<Category>[] = [
  {
    header: 'Category',
    cell: (r) => (
      <Link to={paths.detail('categories', r.id)} className='flex items-center gap-3 font-semibold'>
        <Botanical kind={r.art} />
        {r.name}
      </Link>
    ),
  },
  { header: 'Description', className: 'max-w-[240px] truncate text-xs text-[var(--muted-foreground)]', cell: (r) => r.description },
  { header: 'Products', className: 'text-xs', cell: (r) => r.productCount ?? 0 },
  { header: 'Status', cell: (r) => <Status>{r.status}</Status> },
  { header: 'Created', className: 'text-xs text-[var(--muted-foreground)]', cell: (r) => r.createdAt ?? 'Mar 20, 2024' },
];
