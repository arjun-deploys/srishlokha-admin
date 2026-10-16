export function AuthAlert({ message }: { message: string }) {
  if (!message) return null;
  return (
    <p
      role='alert'
      className='border border-[oklch(88%_.06_28)] bg-[oklch(96%_.025_28)] px-3 py-2 text-xs text-[var(--destructive)]'
    >
      {message}
    </p>
  );
}
