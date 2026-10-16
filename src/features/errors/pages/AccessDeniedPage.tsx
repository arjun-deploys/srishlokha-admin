import { LockKeyhole } from 'lucide-react';
import { Link } from 'react-router';
import { paths } from '@/app/router/paths';

export function AccessDeniedPage() {
  return (
    <div className='panel mx-auto max-w-lg px-6 py-14 text-center'>
      <LockKeyhole size={28} className='mx-auto text-[var(--terracotta)]' />
      <h1 className='serif mt-3 text-3xl'>This section isn’t in your role.</h1>
      <p className='mt-2 text-xs leading-5 text-[var(--muted-foreground)]'>
        Your selected demo role doesn’t include this area. Switch to Super Admin to preview all storefront operations.
      </p>
      <Link to={paths.dashboard} className='btn btn-primary mt-5'>
        Return to overview
      </Link>
    </div>
  );
}
