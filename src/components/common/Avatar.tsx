import { initialsOf } from '@/lib/format';

export function Avatar({ name, size = 32 }: { name: string; size?: number }) {
  return (
    <span
      className='inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--sand)] font-semibold text-[var(--forest)]'
      style={{ width: size, height: size, fontSize: size * 0.34 }}
    >
      {initialsOf(name)}
    </span>
  );
}
