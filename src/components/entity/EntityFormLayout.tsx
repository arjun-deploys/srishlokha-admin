import type { FormEvent, ReactNode } from 'react';
import { Check } from 'lucide-react';
import { BackLink, PageHead } from '@/components/common';
import { Button } from '@/components/ui/button';
import { paths } from '@/app/router/paths';
import { SECTION_META } from '@/config/sections';
import type { Section } from '@/types';

interface EntityFormLayoutProps {
  section: Section;
  isEdit: boolean;
  saved: boolean;
  error?: string;
  submitLabel: string;
  onSubmit: (e: FormEvent) => void;
  onCancel: () => void;
  children: ReactNode;
}

export function EntityFormLayout({ section, isEdit, saved, error, submitLabel, onSubmit, onCancel, children }: EntityFormLayoutProps) {
  const meta = SECTION_META[section];
  return (
    <div className='fade-in max-w-[1000px]'>
      <BackLink to={paths.list(section)} label={`Back to ${meta.title.toLowerCase()}`} />
      <PageHead
        title={`${isEdit ? 'Edit' : 'Create'} ${meta.singular}`}
        description={
          isEdit
            ? 'Update the details below. Changes are held in this local demo.'
            : 'Add a new record to the sample operations workspace.'
        }
        eyebrow={meta.title}
      />
      <form onSubmit={onSubmit} className='space-y-4'>
        {children}
        {error && (
          <p role='alert' className='text-xs text-[var(--destructive)]'>
            {error}
          </p>
        )}
        <div className='flex flex-wrap justify-end gap-2 border-t border-[var(--border)] pt-4'>
          <Button type='button' variant='secondary' onClick={onCancel}>
            Cancel
          </Button>
          <Button type='submit' variant='primary'>
            {saved ? (
              <>
                <Check size={15} /> Saved
              </>
            ) : (
              submitLabel
            )}
          </Button>
        </div>
      </form>
      <p className='mt-3 text-[10px] text-[var(--muted-foreground)]'>
        Changes are saved only in this browser session. No email or backend request is sent.
      </p>
    </div>
  );
}
