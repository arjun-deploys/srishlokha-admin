import { EntityListPage } from '@/components/entity/EntityListPage';
import type { Product } from '@/types';
import { productColumns } from '../columns';

export function ProductListPage() {
  return <EntityListPage<Product> section='products' columns={productColumns} deletable />;
}
