import { EntityListPage } from '@/components/entity/EntityListPage';
import type { Category } from '@/types';
import { categoryColumns } from '../columns';

export function CategoryListPage() {
  return <EntityListPage<Category> section='categories' columns={categoryColumns} deletable />;
}
