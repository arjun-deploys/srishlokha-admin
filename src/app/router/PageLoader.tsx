export function PageLoader() {
  return (
    <div role='status' aria-live='polite' className='flex min-h-[40dvh] items-center justify-center text-xs text-[var(--muted-foreground)]'>
      Loading…
    </div>
  );
}
