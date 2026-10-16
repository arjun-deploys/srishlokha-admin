import { Link } from 'react-router';
import { Botanical } from '@/components/common';
import { paths } from '@/app/router/paths';
import type { Product } from '@/types';

export function LowStockList({ products }: { products: Product[] }) {
  return (
    <section className='panel'>
      <div className='flex items-center justify-between border-b border-[var(--border)] px-4 py-3'>
        <h2 className='text-xs font-semibold'>Stock that needs a look</h2>
        <Link to={paths.list('products')} className='text-[10px] font-semibold text-[var(--forest)]'>
          View catalog
        </Link>
      </div>
      {products.map((p) => (
        <div className='flex items-center gap-3 border-b border-[var(--border)] px-4 py-3 last:border-0' key={p.id}>
          <Botanical kind={p.art} />
          <div className='flex-1'>
            <p className='text-xs font-semibold'>{p.name}</p>
            <p className='text-[10px] text-[var(--muted-foreground)]'>{p.sku}</p>
          </div>
          <span className='text-xs font-semibold text-[var(--terracotta)]'>{p.stock} left</span>
        </div>
      ))}
    </section>
  );
}
