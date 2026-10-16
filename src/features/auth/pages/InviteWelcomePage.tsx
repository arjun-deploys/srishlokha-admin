import type { FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router';
import { paths } from '@/app/router/paths';
import { AuthFooter } from '../components/AuthFooter';
import { AuthHeading } from '../components/AuthHeading';
import { SubmitButton } from '../components/SubmitButton';

export function InviteWelcomePage() {
  const navigate = useNavigate();
  const { token = 'fresh-flowers' } = useParams();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    navigate(paths.inviteVerify(token));
  };

  return (
    <>
      <AuthHeading
        eyebrow='A note from Sri Shloka'
        title='Welcome to the platform'
        description='You’ve been invited to join the Sri Shloka admin team.'
      />
      <form onSubmit={submit} className='mt-7 space-y-4'>
        <div className='border border-[var(--border)] bg-[var(--card)] p-3'>
          <p className='text-[10px] text-[var(--muted-foreground)]'>Invitation for</p>
          <p className='mt-1 text-xs font-semibold'>m***@sri-shloka.demo</p>
          <p className='mt-2 text-[10px] leading-4 text-[var(--muted-foreground)]'>
            We’ll send a verification code to confirm this invited address before you set a password.
          </p>
        </div>
        <SubmitButton>Confirm email & proceed</SubmitButton>
      </form>
      <AuthFooter backTo={paths.login} backLabel='Back to login' />
    </>
  );
}
