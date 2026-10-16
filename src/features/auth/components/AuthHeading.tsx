interface AuthHeadingProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function AuthHeading({ eyebrow = 'Sri Shloka · admin workspace', title, description }: AuthHeadingProps) {
  return (
    <>
      <p className='eyebrow mb-2'>{eyebrow}</p>
      <h1 className='serif text-[36px] leading-tight text-[var(--forest-deep)]'>{title}</h1>
      <p className='mt-2 max-w-sm text-sm leading-6 text-[var(--muted-foreground)]'>{description}</p>
    </>
  );
}
