import type { ReactNode } from 'react';
import { BackLink, PageHead } from '@/components/common';
import { paths } from '@/app/router/paths';
import { SECTION_META } from '@/config/sections';
import type { Section } from '@/types';

interface DetailLayoutProps {
  section: Section;
  title: string;
  description: string;
  action?: ReactNode;
  children: ReactNode;
}

export function DetailLayout({ section, title, description, action, children }: DetailLayoutProps) {
  const meta = SECTION_META[section];
  return (
    <div className='fade-in'>
      <BackLink to={paths.list(section)} label={`Back to ${meta.title}`} />
      <PageHead title={title} description={description} eyebrow={meta.title} action={action} />
      {children}
    </div>
  );
}
