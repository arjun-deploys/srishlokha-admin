import { EntityListPage } from '@/components/entity/EntityListPage';
import type { Order } from '@/types';
import { orderColumns } from '../columns';

export function OrderListPage() {
  return <EntityListPage<Order> section='orders' columns={orderColumns} nameKey='id' />;
}
