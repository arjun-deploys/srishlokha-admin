import { Check, X } from 'lucide-react';

export function Toast({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  if (!message) return null;
  return (
    <div
      role='status'
      className='fixed bottom-5 right-5 z-50 flex items-center gap-2 border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-xs shadow-lg'
    >
      <Check size={15} className='text-[var(--success)]' />
      {message}
      <button aria-label='Dismiss' onClick={onDismiss}>
        <X size={14} />
      </button>
    </div>
  );
}
