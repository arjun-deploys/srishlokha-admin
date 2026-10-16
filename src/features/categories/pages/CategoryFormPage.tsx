import { FormCard, FormControl, ImageBox } from '@/components/common';
import { EntityFormLayout } from '@/components/entity/EntityFormLayout';
import { useEntityForm } from '@/hooks/useEntityForm';

export function CategoryFormPage() {
  const form = useEntityForm('categories');
  const { get, set, old } = form;

  return (
    <EntityFormLayout
      section='categories'
      isEdit={form.isEdit}
      saved={form.saved}
      error={form.error}
      submitLabel='Save Category'
      onSubmit={form.submit}
      onCancel={form.cancel}
    >
      <FormCard title='Category information' detail='A clear name helps buyers find the right offering'>
        <div className='grid gap-4 md:grid-cols-2'>
          <FormControl label='Category name' required value={get('name')} onChange={(v) => set('name', v)} />
          <FormControl
            label='Status'
            type='select'
            options={['Active', 'Inactive']}
            value={get('status', 'Active')}
            onChange={(v) => set('status', v)}
          />
          <div className='md:col-span-2'>
            <FormControl label='Description' type='textarea' value={get('description')} onChange={(v) => set('description', v)} />
          </div>
        </div>
      </FormCard>
      <FormCard title='Category image' detail='A simple image helps distinguish each part of the catalog'>
        <ImageBox kind={old?.art ?? 'flowers'} />
      </FormCard>
    </EntityFormLayout>
  );
}
