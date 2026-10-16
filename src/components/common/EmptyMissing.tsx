import { CircleHelp } from 'lucide-react';
import { Link } from 'react-router';

interface EmptyMissingProps {
  title: string;
  text: string;
  back: string;
}

export function EmptyMissing({ title, text, back }: EmptyMissingProps) {
  return (
    <div className='panel mx-auto max-w-xl px-6 py-16 text-center'>
      <CircleHelp className='mx-auto text-[var(--forest)]' size={27} />
      <h2 className='serif mt-3 text-2xl'>{title}</h2>
      <p className='mt-2 text-xs text-[var(--muted-foreground)]'>{text}</p>
      <Link className='btn btn-primary mt-5' to={back}>
        Return to list
      </Link>
    </div>
  );
}
