import { SelectField } from '@/components/ui/select';

interface FormControlProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  options?: string[];
  required?: boolean;
}

export function FormControl({ label, value, onChange, type = 'text', options = [], required = false }: FormControlProps) {
  return (
    <label className='block'>
      <span className='label'>
        {label}
        {required && <span className='text-[var(--terracotta)]'> *</span>}
      </span>
      {type === 'textarea' ? (
        <textarea
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className='field min-h-[100px] resize-y'
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      ) : type === 'select' ? (
        <SelectField
          value={value}
          onValueChange={onChange}
          options={options}
          placeholder={`Choose ${label.toLowerCase()}`}
          required={required}
        />
      ) : (
        <input
          required={required}
          type={type === 'number' ? 'number' : type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className='field'
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      )}
    </label>
  );
}
