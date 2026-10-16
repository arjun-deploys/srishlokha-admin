import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import { FormControl } from '@/components/common';
import { CheckboxField } from '@/components/ui/checkbox';
import { paths } from '@/app/router/paths';
import { DEMO_USER } from '@/config/demo';
import { AuthAlert } from '../components/AuthAlert';
import { AuthFooter } from '../components/AuthFooter';
import { AuthHeading } from '../components/AuthHeading';
import { PasswordField } from '../components/PasswordField';
import { SubmitButton } from '../components/SubmitButton';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>(DEMO_USER.email);
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [notice, setNotice] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes('@') || !password) return setNotice('Enter a valid email and password to continue.');
    navigate(paths.dashboard);
  };

  return (
    <>
      <AuthHeading title='Welcome back' description='Sign in to your admin account.' />
      <form onSubmit={submit} className='mt-7 space-y-4'>
        <FormControl label='Email address' type='email' value={email} onChange={setEmail} required />
        <PasswordField value={password} onChange={setPassword} placeholder='Enter your password' />
        <div className='flex items-center justify-between'>
          <label className='flex items-center gap-2 text-xs'>
            <CheckboxField checked={remember} onCheckedChange={setRemember} aria-label='Remember me' /> Remember me
          </label>
          <Link to={paths.forgotPassword} className='text-xs font-semibold text-[var(--forest)]'>
            Forgot password?
          </Link>
        </div>
        <AuthAlert message={notice} />
        <SubmitButton>Sign in</SubmitButton>
        <p className='text-center text-[10px] text-[var(--muted-foreground)]'>Invitations are issued by your Super Admin.</p>
      </form>
      <AuthFooter note='Authorized team members only' />
    </>
  );
}
