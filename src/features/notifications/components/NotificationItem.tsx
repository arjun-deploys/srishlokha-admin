import { Bell, BriefcaseBusiness, Flower2, Package, ShoppingBag, Users, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import type { AppNotification, NotificationType } from '../data';

const ICONS: Record<NotificationType, LucideIcon> = {
  Arrival: Flower2,
  Order: ShoppingBag,
  Wholesale: BriefcaseBusiness,
  Inventory: Package,
  Team: Users,
};

export function NotificationItem({ item, onMarkRead }: { item: AppNotification; onMarkRead: (id: number) => void }) {
  const Icon = ICONS[item.type] ?? Bell;
  return (
    <div
      className={`flex items-start gap-3 border-b border-[var(--border)] p-4 last:border-0 ${item.read ? '' : 'bg-[oklch(98.8%_.009_86)]'}`}
    >
      <span className='flex h-9 w-9 shrink-0 items-center justify-center bg-[var(--sand)] text-[var(--forest)]'>
        <Icon size={17} />
      </span>
      <div className='min-w-0 flex-1'>
        <div className='flex flex-wrap items-center gap-2'>
          <Link to={item.href} className='text-xs font-semibold hover:text-[var(--forest)]'>
            {item.title}
          </Link>
          {!item.read && <span className='h-1.5 w-1.5 rounded-full bg-[var(--terracotta)]' />}
          <span className='rounded-sm bg-[var(--sand)] px-1.5 py-0.5 text-[9px]'>{item.type}</span>
        </div>
        <p className='mt-1 text-xs leading-5 text-[var(--muted-foreground)]'>{item.body}</p>
        <p className='mt-1 text-[10px] text-[var(--muted-foreground)]'>{item.time}</p>
      </div>
      {!item.read && (
        <Button variant='quiet' className='!min-h-8 !px-2 text-[10px]' onClick={() => onMarkRead(item.id)}>
          Mark read
        </Button>
      )}
    </div>
  );
}
