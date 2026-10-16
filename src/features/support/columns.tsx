import { Link } from 'react-router';
import { Status } from '@/components/common';
import { paths } from '@/app/router/paths';
import type { Column, SupportTicket } from '@/types';

export const supportColumns: Column<SupportTicket>[] = [
  {
    header: 'Enquiry',
    cell: (r) => (
      <Link to={paths.detail('support', r.id)} className='font-semibold text-[var(--forest)]'>
        {r.id}
      </Link>
    ),
  },
  {
    header: 'Customer',
    cell: (r) => (
      <>
        <span className='text-xs font-medium'>{r.customer}</span>
        <span className='block text-[10px] text-[var(--muted-foreground)]'>{r.email}</span>
      </>
    ),
  },
  { header: 'Subject', className: 'max-w-[190px] truncate text-xs', cell: (r) => r.subject },
  { header: 'Type', className: 'text-xs', cell: (r) => r.type },
  { header: 'Priority', cell: (r) => <Status>{r.priority}</Status> },
  { header: 'Assigned to', className: 'text-xs', cell: (r) => r.assignee },
  { header: 'Date', className: 'whitespace-nowrap text-xs text-[var(--muted-foreground)]', cell: (r) => r.date },
  { header: 'Status', cell: (r) => <Status>{r.status}</Status> },
];
