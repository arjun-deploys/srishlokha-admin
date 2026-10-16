import { MapPin, Truck } from 'lucide-react';

const HUBS = [
  ['Edison, NJ', 'Route handoff · 09:30', 'Ready'],
  ['Houston, TX', 'Regional transfer · 14:00', 'Expected'],
  ['Bellevue, WA', 'Next-day arrival · Mar 21', 'In transit'],
];

export function FreshnessWatch() {
  return (
    <section className='panel p-5'>
      <div className='mb-4 flex items-center justify-between'>
        <div>
          <p className='eyebrow mb-1'>Freshness watch</p>
          <h2 className='serif text-[21px] text-[var(--forest-deep)]'>Arrival & cold chain</h2>
        </div>
        <Truck className='text-[var(--forest)]' size={19} />
      </div>
      <div className='border border-[var(--border)] bg-[var(--ivory)] p-3'>
        <div className='flex items-center justify-between'>
          <span className='flex items-center gap-2 text-xs font-semibold'>
            <span className='h-2 w-2 rounded-full bg-[var(--success)]' /> Weekly import · JFK
          </span>
          <span className='text-[10px] text-[var(--muted-foreground)]'>Arrived 06:18</span>
        </div>
        <div className='mt-3 grid grid-cols-3 gap-2'>
          {[
            ['Temp.', '3.8°C'],
            ['Pallets', '12 / 12'],
            ['Next hub', 'Edison, NJ'],
          ].map(([k, v]) => (
            <div key={k}>
              <p className='eyebrow'>{k}</p>
              <p className='mt-1 text-sm font-semibold'>{v}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-4 space-y-3'>
        {HUBS.map(([hub, detail, state]) => (
          <div className='flex items-center gap-3' key={hub}>
            <span className='flex h-8 w-8 items-center justify-center bg-[var(--sand)] text-[var(--forest)]'>
              <MapPin size={14} />
            </span>
            <div className='flex-1'>
              <p className='text-xs font-semibold'>{hub}</p>
              <p className='text-[10px] text-[var(--muted-foreground)]'>{detail}</p>
            </div>
            <span className='text-[10px] text-[var(--muted-foreground)]'>{state}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
