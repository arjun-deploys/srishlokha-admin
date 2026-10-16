import { EntityListPage } from '@/components/entity/EntityListPage';
import type { Role } from '@/types';
import { roleColumns } from '../columns';

export function RoleListPage() {
  return <EntityListPage<Role> section='roles' columns={roleColumns} deletable />;
}
