import { useNavigate } from 'react-router';
import { Avatar, FormCard, FormControl } from '@/components/common';
import { paths } from '@/app/router/paths';
import { DEMO_USER } from '@/config/demo';
import { SettingsForm } from '../components/SettingsForm';
import { useSettings } from '../SettingsContext';

export function ProfileSettingsPage() {
  const navigate = useNavigate();
  const { profileName, setProfileName } = useSettings();
  return (
    <SettingsForm>
      <FormCard title='Your profile' detail='Profile information for this demo administrator'>
        <div className='mb-4 flex items-center gap-3'>
          <Avatar name={profileName} size={48} />
          <button type='button' className='btn btn-secondary !min-h-8 text-xs'>
            Change photo
          </button>
        </div>
        <div className='grid gap-4 sm:grid-cols-2'>
          <FormControl label='Admin name' value={profileName} onChange={setProfileName} />
          <FormControl label='Email address' value={DEMO_USER.email} onChange={() => {}} />
          <FormControl label='Assigned role' value='Super Admin' onChange={() => {}} />
        </div>
      </FormCard>
      <FormCard title='Password & security' detail='Authentication is not connected in this frontend demo'>
        <p className='mb-3 text-xs text-[var(--muted-foreground)]'>Password changes are represented in the interface only.</p>
        <button type='button' className='btn btn-secondary' onClick={() => navigate(paths.forgotPassword)}>
          Change password
        </button>
      </FormCard>
    </SettingsForm>
  );
}
