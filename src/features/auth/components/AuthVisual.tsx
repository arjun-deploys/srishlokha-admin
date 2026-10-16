import { Leaf, Thermometer } from 'lucide-react';
import { Botanical, Brand } from '@/components/common';

export function AuthVisual() {
  return (
    <div className='auth-visual relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-[var(--forest-deep)] p-7 text-[var(--ivory)] md:min-h-full md:p-10'>
      <div className='relative z-10'>
        <Brand inverse />
      </div>
      <div className='auth-flower' aria-hidden='true'>
        <Botanical kind='garland' large />
        <Botanical kind='flowers' large />
        <Botanical kind='leaf' large />
      </div>
      <div className='relative z-10 max-w-md'>
        <p className='eyebrow !text-[var(--gold)]'>Rooted in ritual · delivered with care</p>
        <h2 className='serif mt-3 text-[34px] leading-[1.05] md:text-[42px]'>
          The fragrance of home,
          <br />
          wherever you are.
        </h2>
        <p className='mt-4 max-w-sm text-sm leading-6 text-white/65'>
          Weekly arrivals from trusted growers. Freshness watched from the first mile to your doorstep.
        </p>
        <div className='mt-7 flex gap-4 border-t border-white/15 pt-4 text-[10px] text-white/60'>
          <span className='flex items-center gap-1.5'>
            <Leaf size={13} /> Fresh every week
          </span>
          <span className='flex items-center gap-1.5'>
            <Thermometer size={13} /> Chilled with care
          </span>
        </div>
      </div>
      <span className='absolute bottom-8 right-8 serif text-[150px] leading-none text-white/[.035]'>ஶ்ரீ</span>
    </div>
  );
}
