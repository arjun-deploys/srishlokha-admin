import { FormCard, FormControl } from '@/components/common';
import { EntityFormLayout } from '@/components/entity/EntityFormLayout';
import { DEMO_ROLES } from '@/config/access';
import { useEntityForm } from '@/hooks/useEntityForm';

export function AdminFormPage() {
  const form = useEntityForm('admins', (v, old) => {
    const first = v.first ?? old?.name?.split(' ')[0] ?? '';
    const last = v.last ?? old?.name?.split(' ').slice(1).join(' ') ?? '';
    return `${first} ${last}`.trim();
  });
  const { old, get, set } = form;

  return (
    <EntityFormLayout
      section='admins'
      isEdit={form.isEdit}
      saved={form.saved}
      error={form.error}
      submitLabel='Create Admin & Send Invitation'
      onSubmit={form.submit}
      onCancel={form.cancel}
    >
      <FormCard title='Admin details' detail='An invitation will be represented in this local demo'>
        <div className='grid gap-4 md:grid-cols-2'>
          <FormControl label='First name' required value={form.values.first ?? old?.name?.split(' ')[0] ?? ''} onChange={(v) => set('first', v)} />
          <FormControl
            label='Last name'
            required
            value={form.values.last ?? old?.name?.split(' ').slice(1).join(' ') ?? ''}
            onChange={(v) => set('last', v)}
          />
          <FormControl label='Email address' type='email' required value={get('email')} onChange={(v) => set('email', v)} />
          <FormControl
            label='Assigned role'
            type='select'
            options={[...DEMO_ROLES]}
            value={get('role', DEMO_ROLES[1])}
            onChange={(v) => set('role', v)}
          />
          {form.isEdit && (
            <FormControl
              label='Account status'
              type='select'
              options={['Active', 'Inactive', 'Pending Invitation']}
              value={get('status', 'Active')}
              onChange={(v) => set('status', v)}
            />
          )}
        </div>
      </FormCard>
    </EntityFormLayout>
  );
}
