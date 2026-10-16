import { EntityListPage } from '@/components/entity/EntityListPage';
import type { Admin } from '@/types';
import { adminColumns } from '../columns';

export function AdminListPage() {
  return <EntityListPage<Admin> section='admins' columns={adminColumns} deletable />;
}
