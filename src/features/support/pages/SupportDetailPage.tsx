import { useState } from 'react';
import { ImagePlus, Send } from 'lucide-react';
import { EmptyMissing, FormCard, Status, Toast } from '@/components/common';
import { DetailLayout } from '@/components/entity/DetailLayout';
import { SelectField } from '@/components/ui/select';
import { paths } from '@/app/router/paths';
import { DEMO_USER } from '@/config/demo';
import { useToast } from '@/hooks/useToast';
import { useRecord } from '@/store/DataProvider';
import type { SupportTicket } from '@/types';
import { ConversationThread } from '../components/ConversationThread';

const ASSIGNEES = ['Maya Srinivasan', 'Anita Rao', 'Ravi Patel'];
const TICKET_STATUSES = ['Open', 'In Progress', 'Resolved', 'Closed'];

export function SupportDetailPage() {
  const { id, record, update } = useRecord('support');
  const [reply, setReply] = useState('');
  const [internal, setInternal] = useState('');
  const toast = useToast();

  if (!record)
    return (
      <EmptyMissing
        title='Record not found'
        text='This sample record may have been removed from the workspace.'
        back={paths.list('support')}
      />
    );
  const mutate = (updates: Partial<SupportTicket>) => update(id, { ...record, ...updates });

  return (
    <DetailLayout section='support' title={record.subject} description={`${record.id} · ${record.customer} · ${record.date}`}>
      <div className='grid gap-4 xl:grid-cols-[1.65fr_1fr]'>
        <div className='space-y-4'>
          <FormCard title='Conversation' detail='Customer-facing replies are shown in the thread'>
            <ConversationThread messages={record.messages ?? []} />
            <div className='mt-5 border-t border-[var(--border)] pt-4'>
              <label className='label' htmlFor='reply'>
                Reply to customer
              </label>
              <textarea
                id='reply'
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                className='field min-h-[95px]'
                placeholder='Write a thoughtful reply…'
              />
              <div className='mt-2 flex justify-between'>
                <button
                  className='btn btn-secondary !min-h-8 !px-2 text-xs'
                  onClick={() => toast.show('Attachment is available in the live workspace only.')}
                >
                  <ImagePlus size={14} /> Attach file
                </button>
                <button
                  disabled={!reply.trim()}
                  className='btn btn-primary !min-h-8'
                  onClick={() => {
                    mutate({ messages: [...record.messages, [DEMO_USER.name, reply, 'Just now']] });
                    setReply('');
                    toast.show('Reply added to the sample conversation.');
                  }}
                >
                  <Send size={14} /> Send reply
                </button>
              </div>
            </div>
          </FormCard>
          <FormCard title='Internal notes' detail='Visible to admins only — never sent to the customer'>
            <textarea
              value={internal}
              onChange={(e) => setInternal(e.target.value)}
              className='field min-h-[76px]'
              placeholder='Add an internal note…'
            />
            <button
              className='btn btn-secondary mt-2'
              disabled={!internal.trim()}
              onClick={() => {
                toast.show('Internal note saved locally.');
                setInternal('');
              }}
            >
              Save internal note
            </button>
          </FormCard>
        </div>
        <div className='space-y-4'>
          <FormCard title='Enquiry details' detail={record.id}>
            <div className='space-y-3'>
              <div>
                <p className='label'>Customer</p>
                <p className='text-xs font-semibold'>{record.customer}</p>
                <p className='text-[10px] text-[var(--muted-foreground)]'>{record.email}</p>
              </div>
              <div>
                <p className='label'>Type & priority</p>
                <div className='flex gap-2'>
                  <span className='rounded-sm bg-[var(--sand)] px-2 py-1 text-[10px]'>{record.type}</span>
                  <Status>{record.priority}</Status>
                </div>
              </div>
              <div>
                <p className='label'>Assigned to</p>
                <SelectField className='field' value={record.assignee} onValueChange={(assignee) => mutate({ assignee })} options={ASSIGNEES} />
              </div>
              <div>
                <p className='label'>Ticket status</p>
                <SelectField className='field' value={record.status} onValueChange={(status) => mutate({ status })} options={TICKET_STATUSES} />
              </div>
            </div>
          </FormCard>
          <FormCard title='Original enquiry' detail={record.date}>
            <p className='text-xs leading-5'>{record.messages?.[0]?.[1]}</p>
          </FormCard>
        </div>
      </div>
      <Toast message={toast.message} onDismiss={toast.dismiss} />
    </DetailLayout>
  );
}
