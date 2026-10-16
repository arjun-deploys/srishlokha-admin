import { Check } from 'lucide-react';

export function PasswordRequirements({ password }: { password: string }) {
  const rules: [string, boolean][] = [
    ['At least 8 characters', password.length >= 8],
    ['One uppercase letter', /[A-Z]/.test(password)],
    ['One number', /\d/.test(password)],
  ];
  return (
    <div className='border border-[var(--border)] bg-[var(--card)] p-3'>
      <p className='mb-2 text-[10px] font-semibold'>Password requirements</p>
      {rules.map(([label, ok]) => (
        <p
          key={label}
          className={`flex items-center gap-2 py-1 text-[10px] ${ok ? 'text-[var(--success)]' : 'text-[var(--muted-foreground)]'}`}
        >
          <Check size={12} />
          {label}
        </p>
      ))}
    </div>
  );
}
