import { FormCard } from '@/components/common';
import { Preference } from '../components/Preference';
import { SettingsForm } from '../components/SettingsForm';
import { useSettings, type PrefKey } from '../SettingsContext';

const IN_APP: [PrefKey, string][] = [
  ['orders', 'New orders'],
  ['lowStock', 'Low stock alerts'],
  ['support', 'Customer enquiries'],
  ['wholesale', 'Wholesale enquiries'],
  ['admin', 'Admin invitations and access changes'],
];
const EMAIL: [PrefKey, string][] = [
  ['emailOrders', 'New orders'],
  ['emailStock', 'Low stock alerts'],
  ['emailSupport', 'Customer enquiries'],
  ['emailWholesale', 'Wholesale enquiries'],
  ['emailAdmin', 'Admin invitations and access changes'],
];

export function NotificationSettingsPage() {
  const { prefs, togglePref } = useSettings();
  const group = (items: [PrefKey, string][]) =>
    items.map(([key, label]) => <Preference key={key} label={label} checked={prefs[key]} onChange={() => togglePref(key)} />);

  return (
    <SettingsForm>
      <FormCard title='In-app notifications' detail='Choose which events should appear in your notification center'>
        {group(IN_APP)}
      </FormCard>
      <FormCard title='Email notifications' detail='Email preferences are stored in this browser only'>
        {group(EMAIL)}
      </FormCard>
    </SettingsForm>
  );
}
