import { useState } from 'react';
import { CheckCheck } from 'lucide-react';
import { PageHead } from '@/components/common';
import { Button } from '@/components/ui/button';
import { TabsList, TabsPanel, TabsRoot, TabsTrigger } from '@/components/ui/tabs';
import { initialNotifications } from '../data';
import { NotificationItem } from '../components/NotificationItem';

const TABS = ['All', 'Unread'];

export function NotificationsPage() {
  const [tab, setTab] = useState('All');
  const [items, setItems] = useState(initialNotifications);
  const visible = items.filter((i) => tab === 'All' || !i.read);
  const markRead = (id: number) => setItems((v) => v.map((x) => (x.id === id ? { ...x, read: true } : x)));

  return (
    <div className='fade-in'>
      <PageHead
        title='Notifications'
        description='The small details that keep every delivery and relationship moving.'
        eyebrow='Store workspace'
        action={
          <Button variant='secondary' onClick={() => setItems((v) => v.map((n) => ({ ...n, read: true })))}>
            <CheckCheck size={15} /> Mark all as read
          </Button>
        }
      />
      <TabsRoot value={tab} onValueChange={(value) => setTab(String(value))} className='panel overflow-hidden'>
        <div className='flex items-center justify-between border-b border-[var(--border)] px-4'>
          <TabsList>
            {TABS.map((t) => (
              <TabsTrigger value={t} key={t}>
                {t}
                {t === 'Unread' && <span className='ml-1.5 text-[10px]'>{items.filter((i) => !i.read).length}</span>}
              </TabsTrigger>
            ))}
          </TabsList>
          <span className='text-[10px] text-[var(--muted-foreground)]'>Sample notifications</span>
        </div>
        <TabsPanel value={tab}>
          {visible.length ? (
            visible.map((n) => <NotificationItem key={n.id} item={n} onMarkRead={markRead} />)
          ) : (
            <div className='px-6 py-16 text-center'>
              <CheckCheck size={25} className='mx-auto text-[var(--forest)]' />
              <h2 className='serif mt-3 text-2xl'>You’re all caught up.</h2>
              <p className='mt-1 text-xs text-[var(--muted-foreground)]'>No unread updates in this demo workspace.</p>
            </div>
          )}
        </TabsPanel>
      </TabsRoot>
    </div>
  );
}
