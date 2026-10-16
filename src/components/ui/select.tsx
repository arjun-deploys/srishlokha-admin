import { Select as SelectPrimitive } from '@base-ui/react/select';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type SelectFieldProps = {
  value: string;
  options: string[];
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  'aria-label'?: string;
  'data-testid'?: string;
  required?: boolean;
  name?: string;
};

export function SelectField({
  value,
  options,
  onValueChange,
  placeholder = 'Choose an option',
  className,
  'aria-label': ariaLabel,
  'data-testid': testId,
  required,
  name,
}: SelectFieldProps) {
  return (
    <SelectPrimitive.Root
      value={value || null}
      onValueChange={(next) => onValueChange(String(next ?? ''))}
      required={required}
      name={name}
    >
      <SelectPrimitive.Trigger
        aria-label={ariaLabel}
        data-testid={testId}
        className={cn('field flex items-center justify-between gap-2 text-left', className)}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon><ChevronDown size={14} aria-hidden="true" /></SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Positioner className="z-[100] outline-none">
          <SelectPrimitive.Popup className="max-h-[min(20rem,var(--available-height))] min-w-[var(--anchor-width)] overflow-auto border border-[var(--border)] bg-[var(--card)] p-1 text-[var(--charcoal)] shadow-lg">
            <SelectPrimitive.List>
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option}
                  value={option}
                  className="flex cursor-pointer items-center justify-between gap-3 px-2.5 py-2 text-xs outline-none data-[highlighted]:bg-[var(--sand)] data-[selected]:font-semibold data-[selected]:text-[var(--forest)]"
                >
                  <SelectPrimitive.ItemText>{option}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator><Check size={13} /></SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.List>
          </SelectPrimitive.Popup>
        </SelectPrimitive.Positioner>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
