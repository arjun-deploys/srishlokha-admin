import type { ReactNode } from 'react';

interface PageHeadProps {
  title: string;
  description?: string;
  action?: ReactNode;
  eyebrow?: string;
}

export function PageHead({ title, description, action, eyebrow }: PageHeadProps) {
  return (
    <div className='mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end'>
      <div>
        {eyebrow && <p className='eyebrow mb-2'>{eyebrow}</p>}
        <h1 className='serif text-[30px] leading-tight text-[var(--forest-deep)] md:text-[34px]'>{title}</h1>
        {description && <p className='mt-1.5 max-w-2xl text-[13px] text-[var(--muted-foreground)]'>{description}</p>}
      </div>
      {action}
    </div>
  );
}
