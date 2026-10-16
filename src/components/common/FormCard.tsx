import type { ReactNode } from 'react';

interface FormCardProps {
  title: string;
  detail: string;
  children: ReactNode;
}

export function FormCard({ title, detail, children }: FormCardProps) {
  return (
    <section className='panel p-4 md:p-5'>
      <div className='mb-4 border-b border-[var(--border)] pb-3'>
        <h2 className='text-sm font-semibold'>{title}</h2>
        <p className='mt-1 text-[11px] text-[var(--muted-foreground)]'>{detail}</p>
      </div>
      {children}
    </section>
  );
}
