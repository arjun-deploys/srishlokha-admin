import { Link } from 'react-router';
import { Status } from '@/components/common';
import { paths } from '@/app/router/paths';
import type { Column, Order } from '@/types';

export const orderColumns: Column<Order>[] = [
  {
    header: 'Order',
    cell: (r) => (
      <Link to={paths.detail('orders', r.id)} className='font-semibold text-[var(--forest)]'>
        {r.id}
      </Link>
    ),
  },
  {
    header: 'Customer',
    cell: (r) => (
      <>
        <span className='text-xs font-medium'>{r.customer}</span>
        <span className='block text-[10px] text-[var(--muted-foreground)]'>{r.email}</span>
      </>
    ),
  },
  { header: 'Date', className: 'whitespace-nowrap text-xs text-[var(--muted-foreground)]', cell: (r) => r.date },
  { header: 'Items', className: 'max-w-[175px] truncate text-xs', cell: (r) => r.items },
  { header: 'Total', className: 'text-xs font-semibold', cell: (r) => r.total },
  { header: 'Payment', cell: (r) => <Status>{r.paymentStatus}</Status> },
  { header: 'Fulfillment', cell: (r) => <Status>{r.status}</Status> },
];
