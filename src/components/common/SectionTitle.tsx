import type { ReactNode } from 'react';

export function SectionTitle({ title, aside }: { title: string; aside?: ReactNode }) {
  return (
    <div className='mb-3 flex items-center justify-between'>
      <h2 className='text-sm font-semibold'>{title}</h2>
      {aside}
    </div>
  );
}
