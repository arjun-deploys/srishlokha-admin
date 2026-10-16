import { Printer } from 'lucide-react';
import { Botanical, EmptyMissing, FormCard, Status } from '@/components/common';
import { DetailLayout } from '@/components/entity/DetailLayout';
import { SelectField } from '@/components/ui/select';
import { paths } from '@/app/router/paths';
import { useRecord } from '@/store/DataProvider';
import type { Order } from '@/types';

const FULFILLMENT_STATUSES = ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled', 'Returned'];

export function OrderDetailPage() {
  const { id, record, update } = useRecord('orders');

  if (!record)
    return (
      <EmptyMissing
        title='Record not found'
        text='This sample record may have been removed from the workspace.'
        back={paths.list('orders')}
      />
    );
  const mutate = (updates: Partial<Order>) => update(id, { ...record, ...updates });

  const timeline = [
    ['Order placed', record.date],
    ['Payment received', record.paymentStatus === 'Paid' ? 'Payment confirmed' : 'Awaiting confirmation'],
    [record.status, record.status === 'Delivered' ? 'Delivered to customer' : 'Current fulfillment status'],
  ];

  return (
    <DetailLayout
      section='orders'
      title={record.id}
      description={`Placed ${record.date} · ${record.customer}`}
      action={
        <button className='btn btn-secondary' onClick={() => window.print()}>
          <Printer size={15} /> Print invoice
        </button>
      }
    >
      <div className='grid gap-4 xl:grid-cols-[1.6fr_1fr]'>
        <div className='space-y-4'>
          <FormCard title='Order items' detail='Flower and devotional-goods order · sample data'>
            <div className='divide-y divide-[var(--border)]'>
              {record.items.split(' · ').map((item, i) => (
                <div key={item} className='flex items-center gap-3 py-3 first:pt-0 last:pb-0'>
                  <Botanical kind={i ? 'essentials' : 'garland'} large />
                  <div className='flex-1'>
                    <p className='text-xs font-semibold'>{item}</p>
                    <p className='text-[10px] text-[var(--muted-foreground)]'>
                      {i ? 'Pooja Essentials' : 'Fresh Garlands'} · Packed chilled
                    </p>
                  </div>
                  <span className='text-xs font-semibold'>{i ? '$32.00' : '$18.50'}</span>
                </div>
              ))}
            </div>
          </FormCard>
          <FormCard title='Delivery & tracking' detail='Careful handling from regional hub to doorstep'>
            <div className='grid gap-4 sm:grid-cols-2'>
              <div>
                <p className='label'>Fulfillment hub</p>
                <p className='text-xs'>{record.hub}</p>
              </div>
              <div>
                <p className='label'>Carrier</p>
                <p className='text-xs'>{record.carrier}</p>
              </div>
              <div className='sm:col-span-2'>
                <p className='label'>Tracking reference</p>
                <p className='font-mono text-xs'>{record.tracking}</p>
              </div>
            </div>
          </FormCard>
          <FormCard title='Order timeline' detail='Sample fulfillment activity'>
            <div className='space-y-4 border-l border-[var(--border)] pl-4'>
              {timeline.map(([name, date], i) => (
                <div className='relative' key={name}>
                  <span
                    className={`absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full border-2 border-[var(--card)] ${i === 2 ? 'bg-[var(--terracotta)]' : 'bg-[var(--forest)]'}`}
                  />
                  <p className='text-xs font-semibold'>{name}</p>
                  <p className='text-[10px] text-[var(--muted-foreground)]'>{date}</p>
                </div>
              ))}
            </div>
          </FormCard>
        </div>
        <div className='space-y-4'>
          <FormCard title='Fulfillment status' detail='Update status in local demo'>
            <Status>{record.status}</Status>
            <SelectField
              aria-label='Update fulfillment status'
              value={record.status}
              onValueChange={(status) => mutate({ status })}
              className='mt-3'
              options={FULFILLMENT_STATUSES}
            />
            <p className='mt-2 text-[10px] text-[var(--muted-foreground)]'>Changes update this view only.</p>
          </FormCard>
          <FormCard title='Customer' detail='Order contact'>
            <p className='text-sm font-semibold'>{record.customer}</p>
            <p className='mt-1 text-xs text-[var(--muted-foreground)]'>{record.email}</p>
            <div className='mt-4 border-t border-[var(--border)] pt-3'>
              <p className='label'>Shipping address</p>
              <p className='text-xs leading-5'>
                48 Oak Tree Road
                <br />
                Edison, NJ 08820
                <br />
                United States
              </p>
            </div>
            <div className='mt-4 border-t border-[var(--border)] pt-3'>
              <p className='label'>Billing address</p>
              <p className='text-xs leading-5'>Same as shipping address</p>
            </div>
          </FormCard>
          <FormCard title='Payment summary' detail='Sample payment'>
            <div className='space-y-2 text-xs'>
              <div className='flex justify-between'>
                <span>Subtotal</span>
                <span>{record.total}</span>
              </div>
              <div className='flex justify-between text-[var(--muted-foreground)]'>
                <span>Cold-chain shipping</span>
                <span>$8.00</span>
              </div>
              <div className='flex justify-between text-[var(--muted-foreground)]'>
                <span>Tax</span>
                <span>Included</span>
              </div>
              <div className='flex justify-between border-t border-[var(--border)] pt-2 font-semibold'>
                <span>Total paid</span>
                <span>{record.total}</span>
              </div>
              <Status>{record.paymentStatus}</Status>
            </div>
          </FormCard>
        </div>
      </div>
    </DetailLayout>
  );
}
