import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { SectionTitle, Status } from '@/components/common';
import { paths } from '@/app/router/paths';
import type { Order } from '@/types';

export function RecentOrders({ orders }: { orders: Order[] }) {
  return (
    <section className='panel'>
      <div className='flex items-center justify-between border-b border-[var(--border)] px-5 py-4'>
        <div>
          <SectionTitle title='Recent orders' />
          <p className='-mt-2 text-[10px] text-[var(--muted-foreground)]'>Latest activity · demo records</p>
        </div>
        <Link to={paths.list('orders')} className='flex items-center gap-1 text-xs font-semibold text-[var(--forest)]'>
          All orders <ArrowRight size={14} />
        </Link>
      </div>
      <div className='table-wrap'>
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Hub</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id}>
                <td>
                  <Link to={paths.detail('orders', o.id)} className='font-semibold text-[var(--forest)]'>
                    {o.id}
                  </Link>
                </td>
                <td>
                  <div className='text-xs font-medium'>{o.customer}</div>
                  <div className='text-[10px] text-[var(--muted-foreground)]'>{o.date}</div>
                </td>
                <td className='text-xs'>{o.hub}</td>
                <td className='text-xs font-semibold'>{o.total}</td>
                <td>
                  <Status>{o.status}</Status>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
