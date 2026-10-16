import { ChevronDown } from 'lucide-react';
import { SectionTitle } from '@/components/common';

const BARS = [38, 54, 44, 72, 61, 88, 76];
const DAYS = ['T', 'F', 'S', 'S', 'M', 'T', 'W'];

export function OrdersChart({ onTogglePeriod }: { onTogglePeriod: () => void }) {
  return (
    <section className='panel overflow-hidden'>
      <div className='flex items-center justify-between border-b border-[var(--border)] px-5 py-4'>
        <div>
          <SectionTitle title='Orders through the week' />
          <p className='-mt-2 text-[10px] text-[var(--muted-foreground)]'>Sample order volume · Mar 14–20</p>
        </div>
        <button className='btn btn-quiet !min-h-8 text-xs' onClick={onTogglePeriod}>
          Last 7 days <ChevronDown size={13} />
        </button>
      </div>
      <div className='px-5 py-5'>
        <div className='flex h-[154px] items-end gap-2 border-b border-l border-[var(--border)] px-2 pb-2'>
          {BARS.map((height, i) => (
            <div className='relative flex h-full flex-1 items-end justify-center' key={i}>
              <div
                className={`w-[55%] min-w-3 ${i === 5 ? 'bg-[var(--terracotta)]' : 'bg-[var(--forest)]'}`}
                style={{ height: `${height}%` }}
              />
              <span className='absolute -bottom-5 text-[9px] text-[var(--muted-foreground)]'>{DAYS[i]}</span>
            </div>
          ))}
        </div>
        <div className='mt-8 flex items-center justify-between'>
          <span className='flex items-center gap-2 text-[10px] text-[var(--muted-foreground)]'>
            <i className='h-2 w-2 bg-[var(--forest)]' /> Orders received
          </span>
          <span className='text-xs font-semibold'>184 orders</span>
        </div>
      </div>
    </section>
  );
}
