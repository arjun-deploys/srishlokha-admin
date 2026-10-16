import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export function BackLink({ to, label }: { to: string; label: string }) {
  const navigate = useNavigate();
  return (
    <button
      type='button'
      onClick={() => navigate(to)}
      className='mb-4 flex items-center gap-1 text-xs text-[var(--muted-foreground)] hover:text-[var(--forest)]'
    >
      <ArrowLeft size={14} /> {label}
    </button>
  );
}
