import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { FormControl } from '@/components/common';
import { paths } from '@/app/router/paths';
import { DEMO_USER } from '@/config/demo';
import { AuthAlert } from '../components/AuthAlert';
import { AuthFooter } from '../components/AuthFooter';
import { AuthHeading } from '../components/AuthHeading';
import { SubmitButton } from '../components/SubmitButton';

export function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>(DEMO_USER.email);
  const [notice, setNotice] = useState('');

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return setNotice('Please enter a valid email address.');
    navigate(paths.resetVerify);
  };

  return (
    <>
      <AuthHeading title='Forgot your password?' description='Enter the email address associated with your admin account.' />
      <form onSubmit={submit} className='mt-7 space-y-4'>
        <FormControl label='Email address' type='email' value={email} onChange={setEmail} required />
        <AuthAlert message={notice} />
        <SubmitButton>Send verification code</SubmitButton>
      </form>
      <AuthFooter backTo={paths.login} backLabel='Back to login' />
    </>
  );
}
