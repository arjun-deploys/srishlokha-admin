import { Flower2 } from 'lucide-react';

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${inverse ? 'text-[#f7f3e8]' : 'text-[var(--forest-deep)]'}`}>
      <span className='flex h-9 w-9 items-center justify-center border border-current/25'>
        <Flower2 size={20} strokeWidth={1.55} />
      </span>
      <span>
        <span className='serif block text-[17px] leading-5'>Sri Shloka</span>
        <span
          className={`block text-[9px] uppercase tracking-[.19em] ${inverse ? 'text-white/55' : 'text-[var(--muted-foreground)]'}`}
        >
          Store operations
        </span>
      </span>
    </div>
  );
}
