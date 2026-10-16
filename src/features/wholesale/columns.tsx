import { Link } from 'react-router';
import { Status } from '@/components/common';
import { paths } from '@/app/router/paths';
import type { Column, WholesaleEnquiry } from '@/types';

export const wholesaleColumns: Column<WholesaleEnquiry>[] = [
  {
    header: 'Enquiry',
    cell: (r) => (
      <Link to={paths.detail('wholesale', r.id)} className='font-semibold text-[var(--forest)]'>
        {r.id}
      </Link>
    ),
  },
  { header: 'Company', className: 'font-semibold text-xs', cell: (r) => r.company },
  { header: 'Contact', className: 'text-xs', cell: (r) => r.contact },
  {
    header: 'Email & phone',
    cell: (r) => (
      <>
        <span className='text-xs'>{r.email}</span>
        <span className='block text-[10px] text-[var(--muted-foreground)]'>{r.phone}</span>
      </>
    ),
  },
  { header: 'Interest', className: 'text-xs', cell: (r) => r.interest },
  { header: 'Quantity', className: 'text-xs', cell: (r) => r.quantity },
  { header: 'Date', className: 'whitespace-nowrap text-xs text-[var(--muted-foreground)]', cell: (r) => r.date },
  { header: 'Status', cell: (r) => <Status>{r.status}</Status> },
];
