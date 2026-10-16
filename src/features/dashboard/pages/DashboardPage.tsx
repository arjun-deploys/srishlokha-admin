import { useState } from 'react';
import { Boxes, Clock3, Package, ShoppingCart } from 'lucide-react';
import { SelectField } from '@/components/ui/select';
import { DEMO_USER } from '@/config/demo';
import { useSection } from '@/store/DataProvider';
import { FreshnessWatch } from '../components/FreshnessWatch';
import { LowStockList } from '../components/LowStockList';
import { MetricCard } from '../components/MetricCard';
import { OrdersChart } from '../components/OrdersChart';
import { RecentOrders } from '../components/RecentOrders';
import { TeamNote } from '../components/TeamNote';

const PERIODS = ['This week', 'This month', 'This quarter'];

export function DashboardPage() {
  const [period, setPeriod] = useState(PERIODS[0]);
  const { rows: orders } = useSection('orders');
  const { rows: products } = useSection('products');

  return (
    <div className='fade-in'>
      <div className='mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end'>
        <div>
          <p className='eyebrow mb-2'>
            Wednesday, March 20, 2024 <span className='mx-1'>·</span> Good morning, {DEMO_USER.name.split(' ')[0]}
          </p>
          <h1 className='serif text-[32px] leading-tight text-[var(--forest-deep)] md:text-[38px]'>A fresh start to the day.</h1>
          <p className='mt-1 text-sm text-[var(--muted-foreground)]'>
            Your daily view of flowers, fulfillment and the people we serve.
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <span className='hidden text-[10px] text-[var(--muted-foreground)] sm:block'>All figures are sample data</span>
          <SelectField
            aria-label='Date range'
            value={period}
            onValueChange={setPeriod}
            options={PERIODS}
            className='!min-h-9 w-auto text-xs'
          />
        </div>
      </div>

      <div className='mb-5 grid grid-cols-2 gap-3 xl:grid-cols-4'>
        <MetricCard label='Orders' value='184' sub='↑ 12.8% vs last week' icon={ShoppingCart} />
        <MetricCard label='Products listed' value='64' sub='6 fresh arrivals today' icon={Package} />
        <MetricCard label='Categories' value='05' sub='Garlands, flowers & more' icon={Boxes} tone='warning' />
        <MetricCard label='Pending orders' value='12' sub='4 need confirmation' icon={Clock3} />
      </div>

      <div className='mb-5 grid gap-4 xl:grid-cols-[1.55fr_1fr]'>
        <OrdersChart onTogglePeriod={() => setPeriod(period === PERIODS[0] ? PERIODS[1] : PERIODS[0])} />
        <FreshnessWatch />
      </div>

      <div className='grid gap-4 xl:grid-cols-[1.55fr_1fr]'>
        <RecentOrders orders={orders.slice(0, 4)} />
        <div className='space-y-4'>
          <LowStockList products={products.filter((p) => p.stock < 10)} />
          <TeamNote />
        </div>
      </div>
    </div>
  );
}
