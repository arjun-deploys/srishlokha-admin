import { CheckboxField } from '@/components/ui/checkbox';

interface PreferenceProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export function Preference({ label, checked, onChange }: PreferenceProps) {
  return (
    <label className='flex cursor-pointer items-center justify-between border-b border-[var(--border)] py-3 last:border-0'>
      <span className='text-xs'>{label}</span>
      <CheckboxField aria-label={label} checked={checked} onCheckedChange={onChange} />
    </label>
  );
}
