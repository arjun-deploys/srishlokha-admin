import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { SectionTitle } from '@/components/common';
import { paths } from '@/app/router/paths';

export function TeamNote() {
  return (
    <section className='panel p-4'>
      <SectionTitle title='A note from the team' />
      <div className='flex gap-3'>
        <span className='flex h-8 w-8 items-center justify-center bg-[var(--sand)] text-[var(--terracotta)]'>
          <Sparkles size={15} />
        </span>
        <p className='text-xs leading-5 text-[var(--muted-foreground)]'>
          The first shipment of jasmine garlands arrived early. Please complete the freshness check before today’s temple deliveries.
        </p>
      </div>
      <div className='mt-3 flex items-center justify-between border-t border-[var(--border)] pt-3 text-[10px] text-[var(--muted-foreground)]'>
        <span>Store note · Mar 20</span>
        <Link to={paths.notifications} className='text-[var(--forest)]'>
          Activity feed <ArrowUpRight size={12} className='inline' />
        </Link>
      </div>
    </section>
  );
}
