import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SubmitButton({ children }: { children: string }) {
  return (
    <Button variant='primary' className='w-full !min-h-11' type='submit'>
      {children}
      <ArrowRight size={15} />
    </Button>
  );
}
