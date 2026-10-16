import { useState, type FormEvent } from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router';
import { FormControl } from '@/components/common';
import { paths } from '@/app/router/paths';
import { AuthAlert } from '../components/AuthAlert';
import { AuthFooter } from '../components/AuthFooter';
import { AuthHeading } from '../components/AuthHeading';
import { PasswordField } from '../components/PasswordField';
import { PasswordRequirements } from '../components/PasswordRequirements';
import { SubmitButton } from '../components/SubmitButton';

export function CreatePasswordPage({ flow }: { flow: 'reset' | 'invite' }) {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [notice, setNotice] = useState('');
  const [success, setSuccess] = useState(false);
  const reset = flow === 'reset';

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (password.length < 8) return setNotice('Password must be at least 8 characters.');
    if (password !== confirm) return setNotice('Passwords do not match. Please check both fields.');
    setNotice('');
    setSuccess(true);
  };

  if (success)
    return (
      <>
        <AuthHeading title='All set.' description='Your password has been updated in this demo.' />
        <div className='mt-7 border border-[var(--border)] bg-[var(--card)] p-4'>
          <p className='flex items-center gap-2 text-sm font-semibold text-[var(--success)]'>
            <Check size={17} /> Password reset successfully
          </p>
          <button className='btn btn-primary mt-4 w-full' onClick={() => navigate(paths.login)}>
            Return to login
          </button>
        </div>
        <AuthFooter backTo={paths.login} backLabel='Back to login' />
      </>
    );

  return (
    <>
      <AuthHeading
        eyebrow={reset ? undefined : 'A note from Sri Shloka'}
        title={reset ? 'Set a new password' : 'Create your password'}
        description='Choose a strong password to keep your account secure.'
      />
      <form onSubmit={submit} className='mt-7 space-y-4'>
        <PasswordField value={password} onChange={setPassword} />
        <FormControl label='Confirm password' type='password' value={confirm} onChange={setConfirm} required />
        <PasswordRequirements password={password} />
        <AuthAlert message={notice} />
        <SubmitButton>{reset ? 'Reset password' : 'Create password'}</SubmitButton>
      </form>
      <AuthFooter backTo={paths.login} backLabel='Back to login' />
    </>
  );
}
