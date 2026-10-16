import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type CheckboxFieldProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  'aria-label'?: string;
  className?: string;
};

export function CheckboxField({
  checked,
  onCheckedChange,
  'aria-label': ariaLabel,
  className,
}: CheckboxFieldProps) {
  return (
    <CheckboxPrimitive.Root
      checked={checked}
      onCheckedChange={onCheckedChange}
      aria-label={ariaLabel}
      className={cn(
        'inline-flex h-4 w-4 shrink-0 items-center justify-center border border-[var(--border)] bg-[var(--card)] text-[var(--ivory)] data-[checked]:border-[var(--forest)] data-[checked]:bg-[var(--forest)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--terracotta)] disabled:opacity-50',
        className,
      )}
    >
      <CheckboxPrimitive.Indicator><Check size={12} strokeWidth={3} /></CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
