import { FormCard, FormControl } from '@/components/common';
import { EntityFormLayout } from '@/components/entity/EntityFormLayout';
import { CheckboxField } from '@/components/ui/checkbox';
import { PERMISSION_OPTIONS } from '@/config/sections';
import { useEntityForm } from '@/hooks/useEntityForm';

export function RoleFormPage() {
  const form = useEntityForm('roles');
  const { get, set } = form;
  const permissions: string[] = get('permissions', []);

  return (
    <EntityFormLayout
      section='roles'
      isEdit={form.isEdit}
      saved={form.saved}
      error={form.error}
      submitLabel='Save Role'
      onSubmit={form.submit}
      onCancel={form.cancel}
    >
      <FormCard title='Role details' detail='Use a clear name and purpose'>
        <div className='grid gap-4 md:grid-cols-2'>
          <FormControl label='Role name' required value={get('name')} onChange={(v) => set('name', v)} />
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
      <FormCard title='Permissions' detail='Select the areas this role can access'>
        <div className='grid gap-2 sm:grid-cols-2'>
          {PERMISSION_OPTIONS.map((k) => (
            <label key={k} className='flex items-center gap-3 border border-[var(--border)] p-3 text-xs'>
              <CheckboxField
                aria-label={`Allow ${k}`}
                checked={permissions.includes(k)}
                onCheckedChange={(checked) =>
                  set('permissions', checked ? [...permissions, k] : permissions.filter((x) => x !== k))
                }
              />
              <span className='flex-1'>{k}</span>
              <span className='text-[10px] text-[var(--muted-foreground)]'>Can manage {k.toLowerCase()}</span>
            </label>
          ))}
        </div>
        <p className='mt-3 text-[10px] text-[var(--muted-foreground)]'>{permissions.length} permissions selected</p>
      </FormCard>
    </EntityFormLayout>
  );
}
