import { EntityListPage } from '@/components/entity/EntityListPage';
import type { SupportTicket } from '@/types';
import { supportColumns } from '../columns';

export function SupportListPage() {
  return <EntityListPage<SupportTicket> section='support' columns={supportColumns} nameKey='id' />;
}
