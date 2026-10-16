import { EmptyMissing, FormCard, Status } from '@/components/common';
import { DetailLayout } from '@/components/entity/DetailLayout';
import { SelectField } from '@/components/ui/select';
import { paths } from '@/app/router/paths';
import { useRecord } from '@/store/DataProvider';

const WHOLESALE_STATUSES = ['New', 'Reviewing', 'Quotation Sent', 'Negotiation', 'Approved', 'Rejected', 'Closed'];

export function WholesaleDetailPage() {
  const { id, record, update } = useRecord('wholesale');

  if (!record)
    return (
      <EmptyMissing
        title='Record not found'
        text='This sample record may have been removed from the workspace.'
        back={paths.list('wholesale')}
      />
    );

  return (
    <DetailLayout section='wholesale' title={record.company} description={`${record.id} · Enquiry received ${record.date}`}>
      <div className='grid gap-4 xl:grid-cols-[1.5fr_1fr]'>
        <div className='space-y-4'>
          <FormCard title='Business requirements' detail='Sample relationship notes'>
            <p className='text-sm leading-6'>{record.notes}</p>
            <div className='mt-4 grid gap-4 border-t border-[var(--border)] pt-4 sm:grid-cols-2'>
              <div>
                <p className='label'>Product interest</p>
                <p className='text-xs'>{record.interest}</p>
              </div>
              <div>
                <p className='label'>Estimated quantity</p>
                <p className='text-xs'>{record.quantity}</p>
              </div>
              <div>
                <p className='label'>Delivery interest</p>
                <p className='text-xs'>Regional recurring delivery</p>
              </div>
              <div>
                <p className='label'>Preferred hub</p>
                <p className='text-xs'>Edison, NJ</p>
              </div>
            </div>
          </FormCard>
          <FormCard title='Relationship history' detail='Activity in this demo'>
            <div className='space-y-4 border-l border-[var(--border)] pl-4'>
              <div>
                <p className='text-xs font-semibold'>Enquiry received</p>
                <p className='text-[10px] text-[var(--muted-foreground)]'>{record.date} · Contact form</p>
              </div>
              <div>
                <p className='text-xs font-semibold'>Assigned to Maya Srinivasan</p>
                <p className='text-[10px] text-[var(--muted-foreground)]'>Today · Follow-up requested</p>
              </div>
            </div>
          </FormCard>
        </div>
        <div className='space-y-4'>
          <FormCard title='Company & contact' detail='Business details'>
            <p className='text-sm font-semibold'>{record.company}</p>
            <div className='mt-4 space-y-3 border-t border-[var(--border)] pt-3'>
              <div>
                <p className='label'>Contact</p>
                <p className='text-xs'>{record.contact}</p>
              </div>
              <div>
                <p className='label'>Email</p>
                <p className='text-xs'>{record.email}</p>
              </div>
              <div>
                <p className='label'>Phone</p>
                <p className='text-xs'>{record.phone}</p>
              </div>
            </div>
          </FormCard>
          <FormCard title='Enquiry status' detail='Update relationship progress'>
            <Status>{record.status}</Status>
            <SelectField
              className='field mt-3'
              value={record.status}
              onValueChange={(status) => update(id, { ...record, status })}
              options={WHOLESALE_STATUSES}
            />
          </FormCard>
        </div>
      </div>
    </DetailLayout>
  );
}
