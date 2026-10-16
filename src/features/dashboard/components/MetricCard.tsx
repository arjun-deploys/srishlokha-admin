import type { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string;
  sub: string;
  icon: LucideIcon;
  tone?: 'default' | 'warning';
}

export function MetricCard({ label, value, sub, icon: Icon, tone = 'default' }: MetricCardProps) {
  return (
    <div className='panel p-4 md:p-5'>
      <div className='flex items-start justify-between'>
        <span className='text-xs text-[var(--muted-foreground)]'>{label}</span>
        <span
          className={`flex h-8 w-8 items-center justify-center ${tone === 'warning' ? 'bg-[oklch(95%_.05_83)] text-[var(--warning)]' : 'bg-[var(--sand)] text-[var(--forest)]'}`}
        >
          <Icon size={16} />
        </span>
      </div>
      <div className='mt-3 flex items-end justify-between'>
        <span className='serif text-[30px] leading-none'>{value}</span>
        <span className='text-[10px] text-[var(--muted-foreground)]'>{sub}</span>
      </div>
    </div>
  );
}
