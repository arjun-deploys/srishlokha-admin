import { Search } from 'lucide-react';
import { useNavigate } from 'react-router';
import { NAV_ITEMS } from '@/config/navigation';

export function SearchBox() {
  const navigate = useNavigate();
  return (
    <label className='relative hidden sm:block'>
      <Search size={15} className='absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]' />
      <input
        aria-label='Search workspace'
        placeholder='Search workspace…'
        className='field !min-h-9 w-[205px] !pl-9 text-xs'
        onKeyDown={(e) => {
          if (e.key !== 'Enter') return;
          const val = e.currentTarget.value.toLowerCase();
          const dest = NAV_ITEMS.find((n) => n.label.toLowerCase().includes(val));
          if (dest) navigate(dest.href);
        }}
      />
    </label>
  );
}
