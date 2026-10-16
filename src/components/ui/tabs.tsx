import { Tabs } from '@base-ui/react/tabs';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export function TabsRoot(props: ComponentProps<typeof Tabs.Root>) {
  return <Tabs.Root {...props} />;
}

export function TabsList({ className, ...props }: ComponentProps<typeof Tabs.List>) {
  return <Tabs.List className={cn('flex items-center gap-5', className)} {...props} />;
}

export function TabsTrigger({ className, ...props }: ComponentProps<typeof Tabs.Tab>) {
  return (
    <Tabs.Tab
      className={cn(
        'border-b-2 border-transparent py-3 text-xs text-[var(--muted-foreground)] outline-none transition-colors data-[active]:border-[var(--forest)] data-[active]:font-semibold data-[active]:text-[var(--forest)] focus-visible:ring-2 focus-visible:ring-[var(--terracotta)]',
        className,
      )}
      {...props}
    />
  );
}

export function TabsPanel({ className, ...props }: ComponentProps<typeof Tabs.Panel>) {
  return <Tabs.Panel className={cn('outline-none', className)} {...props} />;
}
