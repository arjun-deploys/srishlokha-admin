import { Avatar } from '@/components/common';
import { DEMO_USER } from '@/config/demo';
import type { TicketMessage } from '@/types';

export function ConversationThread({ messages }: { messages: TicketMessage[] }) {
  return (
    <div className='space-y-4'>
      {messages.map(([author, body, time], i) => {
        const mine = author === DEMO_USER.name;
        return (
          <div key={i} className={`flex gap-3 ${mine ? 'flex-row-reverse' : ''}`}>
            <Avatar name={author} size={29} />
            <div
              className={`max-w-[85%] border p-3 ${mine ? 'border-[oklch(86%_.035_160)] bg-[oklch(96%_.018_155)]' : 'border-[var(--border)] bg-[var(--ivory)]'}`}
            >
              <div className='mb-1 flex items-center justify-between gap-5'>
                <span className='text-[11px] font-semibold'>{author}</span>
                <span className='text-[9px] text-[var(--muted-foreground)]'>{time}</span>
              </div>
              <p className='text-xs leading-5'>{body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
