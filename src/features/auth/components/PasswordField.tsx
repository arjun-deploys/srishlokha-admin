import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordFieldProps {
  value: string;
  onChange: (v: string) => void;
  label?: string;
  placeholder?: string;
}

export function PasswordField({ value, onChange, label = 'Password', placeholder }: PasswordFieldProps) {
  const [show, setShow] = useState(false);
  return (
    <label className='block'>
      <span className='label'>{label}</span>
      <span className='relative block'>
        <input
          className='field pr-10'
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required
        />
        <button
          type='button'
          onClick={() => setShow(!show)}
          aria-label={show ? 'Hide password' : 'Show password'}
          className='absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[var(--muted-foreground)]'
        >
          {show ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </span>
    </label>
  );
}
