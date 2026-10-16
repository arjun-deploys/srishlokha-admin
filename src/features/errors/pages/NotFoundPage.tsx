import { CircleHelp } from 'lucide-react';
import { Link } from 'react-router';
import { paths } from '@/app/router/paths';

export function NotFoundPage() {
  return (
    <div className='panel mx-auto max-w-lg px-6 py-14 text-center'>
      <CircleHelp size={28} className='mx-auto text-[var(--forest)]' />
      <h1 className='serif mt-3 text-3xl'>This page has wandered off.</h1>
      <p className='mt-2 text-xs text-[var(--muted-foreground)]'>That route isn’t part of this demo workspace.</p>
      <Link to={paths.dashboard} className='btn btn-primary mt-5'>
        Back to overview
      </Link>
    </div>
  );
}
