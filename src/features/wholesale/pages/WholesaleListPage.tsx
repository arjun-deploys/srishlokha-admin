import { EntityListPage } from '@/components/entity/EntityListPage';
import type { WholesaleEnquiry } from '@/types';
import { wholesaleColumns } from '../columns';

export function WholesaleListPage() {
  return <EntityListPage<WholesaleEnquiry> section='wholesale' columns={wholesaleColumns} nameKey='id' />;
}
