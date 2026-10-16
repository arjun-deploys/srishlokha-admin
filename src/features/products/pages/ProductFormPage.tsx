import { FormCard, FormControl, ImageBox } from '@/components/common';
import { EntityFormLayout } from '@/components/entity/EntityFormLayout';
import { useEntityForm } from '@/hooks/useEntityForm';
import { useSection } from '@/store/DataProvider';

const AVAILABILITY = ['Fresh arrival', 'In stock', 'Low stock', 'Out of stock', 'Seasonal'];

export function ProductFormPage() {
  const form = useEntityForm('products', undefined, 'Draft');
  const { get, set, old } = form;
  const { rows: categories } = useSection('categories');

  return (
    <EntityFormLayout
      section='products'
      isEdit={form.isEdit}
      saved={form.saved}
      error={form.error}
      submitLabel='Save Product'
      onSubmit={form.submit}
      onCancel={form.cancel}
    >
      <FormCard title='Basic information' detail='Name and product details'>
        <div className='grid gap-4 md:grid-cols-2'>
          <FormControl label='Product name' required value={get('name')} onChange={(v) => set('name', v)} />
          <FormControl label='SKU' value={get('sku')} onChange={(v) => set('sku', v)} />
          <div className='md:col-span-2'>
            <FormControl label='Description' type='textarea' value={get('description')} onChange={(v) => set('description', v)} />
          </div>
        </div>
      </FormCard>
      <FormCard title='Classification & pricing' detail='Arrange your catalog'>
        <div className='grid gap-4 sm:grid-cols-3'>
          <FormControl
            label='Category'
            type='select'
            options={categories.map((c) => c.name)}
            value={get('category')}
            onChange={(v) => set('category', v)}
          />
          <FormControl label='Selling price' value={get('price')} onChange={(v) => set('price', v)} />
          <FormControl label='Compare-at price' value={get('compareAtPrice')} onChange={(v) => set('compareAtPrice', v)} />
        </div>
      </FormCard>
      <FormCard title='Inventory & arrival' detail='Freshness is part of the product'>
        <div className='grid gap-4 sm:grid-cols-3'>
          <FormControl label='Stock quantity' value={String(get('stock'))} onChange={(v) => set('stock', v)} />
          <FormControl
            label='Availability'
            type='select'
            options={AVAILABILITY}
            value={get('availability', 'Fresh arrival')}
            onChange={(v) => set('availability', v)}
          />
          <FormControl
            label='Publishing status'
            type='select'
            options={['Draft', 'Active', 'Inactive']}
            value={get('status', 'Draft')}
            onChange={(v) => set('status', v)}
          />
        </div>
      </FormCard>
      <FormCard title='Product media' detail='Main image and supporting images'>
        <ImageBox kind={old?.art ?? 'garland'} />
      </FormCard>
    </EntityFormLayout>
  );
}
