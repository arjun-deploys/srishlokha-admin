import { useState, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router';
import { paths } from '@/app/router/paths';
import { DEMO_OTP } from '@/config/demo';
import { AuthAlert } from '../components/AuthAlert';
import { AuthFooter } from '../components/AuthFooter';
import { AuthHeading } from '../components/AuthHeading';
import { SubmitButton } from '../components/SubmitButton';

export function VerifyCodePage({ flow }: { flow: 'reset' | 'invite' }) {
  const navigate = useNavigate();
  const { token = 'fresh-flowers' } = useParams();
  const [otp, setOtp] = useState('');
  const [notice, setNotice] = useState('');
  const invite = flow === 'invite';

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) return setNotice('Enter the complete 6-digit demo code.');
    navigate(invite ? paths.inviteCreatePassword(token) : paths.resetPassword);
  };

  return (
    <>
      <AuthHeading
        eyebrow={invite ? 'A note from Sri Shloka' : undefined}
        title='Verify your email'
        description='Enter the 6-digit code sent to m***@sri-shloka.demo.'
      />
      <form onSubmit={submit} className='mt-7 space-y-4'>
        <label className='block'>
          <span className='label'>Verification code</span>
          <input
            autoComplete='one-time-code'
            inputMode='numeric'
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
            className='field text-center font-mono text-xl tracking-[.55em]'
            placeholder='······'
          />
        </label>
        <div className='flex justify-between text-[10px] text-[var(--muted-foreground)]'>
          <span>Demo code: {DEMO_OTP}</span>
          <button
            type='button'
            onClick={() => setNotice(`A fresh demo code is ready: ${DEMO_OTP}.`)}
            className='font-semibold text-[var(--forest)]'
          >
            Resend code
          </button>
        </div>
        <AuthAlert message={notice} />
        <SubmitButton>{invite ? 'Verify & continue' : 'Verify code'}</SubmitButton>
      </form>
      <AuthFooter
        backTo={invite ? paths.login : paths.forgotPassword}
        backLabel={invite ? 'Back to login' : 'Back to forgot password'}
      />
    </>
  );
}
