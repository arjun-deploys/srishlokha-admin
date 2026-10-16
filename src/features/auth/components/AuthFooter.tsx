import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

interface AuthFooterProps {
  backTo?: string;
  backLabel?: string;
  note?: string;
}

export function AuthFooter({ backTo, backLabel, note }: AuthFooterProps) {
  return (
    <div className='mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4 text-xs'>
      {backTo ? (
        <Link to={backTo} className='flex items-center gap-1 text-[var(--muted-foreground)] hover:text-[var(--forest)]'>
          <ArrowLeft size={13} /> {backLabel}
        </Link>
      ) : (
        <span />
      )}
      {note && <span className='text-[10px] text-[var(--muted-foreground)]'>{note}</span>}
    </div>
  );
}
