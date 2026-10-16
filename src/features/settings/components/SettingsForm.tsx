import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Check } from 'lucide-react';

/** Form wrapper with the shared "Save changes" footer used on every settings tab. */
export function SettingsForm({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSaved(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setSaved(false), 1800);
  };

  return (
    <form onSubmit={onSubmit} className='space-y-4'>
      {children}
      <div className='flex justify-end border-t border-[var(--border)] pt-4'>
        <button className='btn btn-primary' type='submit'>
          {saved ? (
            <>
              <Check size={15} /> Saved locally
            </>
          ) : (
            'Save changes'
          )}
        </button>
      </div>
    </form>
  );
}
