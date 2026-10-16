import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PAGE_SIZE } from '@/config/demo';

interface PaginationProps {
  page: number;
  total: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, total, onPageChange }: PaginationProps) {
  const lastPage = Math.max(1, Math.ceil(total / PAGE_SIZE));
  return (
    <div className='flex items-center justify-between border-t border-[var(--border)] px-4 py-3'>
      <span className='text-[10px] text-[var(--muted-foreground)]'>
        Showing {total ? (page - 1) * PAGE_SIZE + 1 : 0}–{Math.min(page * PAGE_SIZE, total)} of {total} sample records
      </span>
      <div className='flex items-center gap-1'>
        <button
          aria-label='Previous page'
          onClick={() => onPageChange(Math.max(1, page - 1))}
          className='btn btn-secondary !min-h-8 !px-2'
          disabled={page === 1}
        >
          <ChevronLeft size={14} />
        </button>
        <span className='px-2 text-xs'>{page}</span>
        <button
          aria-label='Next page'
          onClick={() => onPageChange(Math.min(lastPage, page + 1))}
          className='btn btn-secondary !min-h-8 !px-2'
          disabled={page >= lastPage}
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
