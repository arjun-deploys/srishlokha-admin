import { Link } from 'react-router';
import { Botanical, Status } from '@/components/common';
import { paths } from '@/app/router/paths';
import type { Column, Product } from '@/types';

export const productColumns: Column<Product>[] = [
  {
    header: 'Product',
    cell: (r) => (
      <Link to={paths.detail('products', r.id)} className='flex items-center gap-3 font-semibold'>
        <Botanical kind={r.art} />
        <span>
          {r.name}
          <span className='mt-0.5 block text-[10px] font-normal text-[var(--muted-foreground)]'>{r.availability}</span>
        </span>
      </Link>
    ),
  },
  { header: 'SKU', className: 'font-mono text-[11px]', cell: (r) => r.sku },
  { header: 'Category', className: 'text-xs', cell: (r) => r.category },
  { header: 'Price', className: 'text-xs font-semibold', cell: (r) => r.price },
  {
    header: 'Stock',
    className: 'text-xs font-semibold',
    cell: (r) => <span className={r.stock < 10 ? 'text-[var(--terracotta)]' : ''}>{r.stock}</span>,
  },
  { header: 'Status', cell: (r) => <Status>{r.status}</Status> },
];
