import { Search, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SelectField } from '@/components/ui/select';

interface ListToolbarProps {
  testId: string;
  placeholder: string;
  query: string;
  onQueryChange: (q: string) => void;
  status: string;
  statusOptions: string[];
  onStatusChange: (s: string) => void;
  onReset: () => void;
}

export function ListToolbar(p: ListToolbarProps) {
  return (
    <div className='flex flex-col justify-between gap-3 border-b border-[var(--border)] p-4 sm:flex-row sm:items-center'>
      <div className='relative w-full sm:max-w-[310px]'>
        <Search size={15} className='absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]' />
        <input
          data-testid={p.testId}
          value={p.query}
          onChange={(e) => p.onQueryChange(e.target.value)}
          className='field !min-h-9 !pl-9 text-xs'
          placeholder={p.placeholder}
        />
      </div>
      <div className='flex gap-2'>
        <SelectField
          className='!min-h-9 w-auto text-xs'
          value={p.status}
          onValueChange={p.onStatusChange}
          options={p.statusOptions}
          aria-label='Filter by status'
        />
        <Button variant='secondary' className='!min-h-9 !px-3 text-xs' onClick={p.onReset}>
          <SlidersHorizontal size={14} /> <span className='hidden sm:inline'>Reset</span>
        </Button>
      </div>
    </div>
  );
}
