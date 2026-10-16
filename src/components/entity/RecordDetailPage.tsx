import { CalendarDays, ShieldCheck } from 'lucide-react';
import { useNavigate, Link } from 'react-router';
import { Avatar, Botanical, EmptyMissing, FormCard, Status } from '@/components/common';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';
import { paths } from '@/app/router/paths';
import { SECTION_META } from '@/config/sections';
import { useRecord } from '@/store/DataProvider';
import type { Section } from '@/types';
import { DetailLayout } from './DetailLayout';

const HIDDEN_KEYS = ['id', 'art', 'messages', 'notes', 'description', 'name'];
const humanize = (k: string) => k.replace(/[A-Z]/g, (m) => ` ${m}`).replace(/^./, (m) => m.toUpperCase());

/** Generic detail view shared by admins, roles, categories and products. */
export function RecordDetailPage({ section }: { section: 'admins' | 'roles' | 'categories' | 'products' }) {
  const navigate = useNavigate();
  const { id, record, remove } = useRecord(section as Section);
  const meta = SECTION_META[section];

  if (!record)
    return (
      <EmptyMissing
        title='Record not found'
        text='This sample record may have been removed from the workspace.'
        back={paths.list(section)}
      />
    );

  const overviewTitle: Record<string, string> = {
    products: 'Product overview',
    categories: 'Category overview',
    admins: 'Admin account',
    roles: 'Role overview',
  };

  return (
    <DetailLayout
      section={section}
      title={record.name}
      description={`Record details · ${record.createdAt ?? 'Mar 20, 2024'}`}
      action={
        <Link to={paths.edit(section, id)} className='btn btn-primary'>
          Edit details
        </Link>
      }
    >
      <div className='grid gap-4 lg:grid-cols-[1.5fr_1fr]'>
        <FormCard title={overviewTitle[section]} detail={`Sample ${meta.singular} record`}>
          <div className='flex items-start gap-4'>
            {(section === 'products' || section === 'categories') && <Botanical kind={record.art ?? 'flowers'} large />}
            {section === 'admins' && <Avatar name={record.name} size={52} />}
            <div>
              <p className='serif text-2xl text-[var(--forest-deep)]'>{record.name}</p>
              <p className='mt-1 text-xs text-[var(--muted-foreground)]'>{record.description ?? record.email}</p>
              <div className='mt-3'>
                <Status>{record.status}</Status>
              </div>
            </div>
          </div>
          <div className='mt-5 grid gap-4 border-t border-[var(--border)] pt-4 sm:grid-cols-2'>
            {Object.entries(record)
              .filter(([k]) => !HIDDEN_KEYS.includes(k))
              .map(([k, v]) => (
                <div key={k}>
                  <p className='label'>{humanize(k)}</p>
                  <p className='text-xs'>{Array.isArray(v) ? v.join(', ') : String(v)}</p>
                </div>
              ))}
          </div>
        </FormCard>
        <div className='space-y-4'>
          <FormCard title='Record activity' detail='Sample metadata'>
            <p className='flex items-center gap-2 text-xs'>
              <CalendarDays size={14} className='text-[var(--forest)]' /> Created {record.createdAt ?? 'Mar 20, 2024'}
            </p>
            {record.role && (
              <p className='mt-3 flex items-center gap-2 text-xs'>
                <ShieldCheck size={14} className='text-[var(--forest)]' /> {record.role}
              </p>
            )}
          </FormCard>
          <FormCard title='Actions' detail='Changes apply to this demo only'>
            <Link to={paths.edit(section, id)} className='btn btn-primary w-full'>
              Edit details
            </Link>
            <ConfirmDialog
              title={`Delete ${record.name}?`}
              description='This sample record will be removed from this browser session. This action cannot be undone.'
              confirmLabel='Delete record'
              onConfirm={() => {
                remove(id);
                navigate(paths.list(section));
              }}
              triggerClassName='mt-2 w-full'
            >
              Delete record
            </ConfirmDialog>
          </FormCard>
        </div>
      </div>
    </DetailLayout>
  );
}
