export type NotificationType = 'Arrival' | 'Order' | 'Wholesale' | 'Inventory' | 'Team';

export interface AppNotification {
  id: number;
  title: string;
  body: string;
  time: string;
  type: NotificationType;
  read: boolean;
  href: string;
}

export const initialNotifications: AppNotification[] = [
  { id: 1, title: 'Fresh jasmine arrival received', body: '12 chilled crates checked in at JFK. Freshness inspection is ready.', time: 'Today, 6:18 AM', type: 'Arrival', read: false, href: '/products' },
  { id: 2, title: 'New temple order needs confirmation', body: 'Sri Venkateswara Temple · 8 garlands and 4 bundles of banana leaves.', time: 'Today, 8:17 AM', type: 'Order', read: false, href: '/orders/SS-240315-02' },
  { id: 3, title: 'Wholesale request from Lotus Temple Supply', body: 'Weekly jasmine garland supply · Edison, NJ.', time: 'Today, 8:52 AM', type: 'Wholesale', read: false, href: '/wholesale/WH-208' },
  { id: 4, title: 'Low stock: Marigold Toran', body: 'Only 8 pieces remain in the active catalog.', time: 'Yesterday, 4:02 PM', type: 'Inventory', read: true, href: '/products/p2' },
  { id: 5, title: 'Admin invitation accepted', body: 'Ravi Patel has joined the Sri Shloka operations team.', time: 'Mar 18, 9:15 AM', type: 'Team', read: true, href: '/admins/a2' },
];
