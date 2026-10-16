import { Flower2 } from 'lucide-react';
import { FormCard, FormControl } from '@/components/common';
import { SettingsForm } from '../components/SettingsForm';
import { useSettings } from '../SettingsContext';

export function StoreSettingsPage() {
  const { fields, setField } = useSettings();
  return (
    <SettingsForm>
      <FormCard title='Store information' detail='The essentials customers and partners need to know'>
        <div className='grid gap-4 sm:grid-cols-2'>
          <FormControl label='Store name' value={fields.store} onChange={(v) => setField('store', v)} />
          <FormControl label='Business contact email' value={fields.email} onChange={(v) => setField('email', v)} />
          <FormControl label='Phone' value={fields.phone} onChange={(v) => setField('phone', v)} />
          <FormControl label='Website' value={fields.website} onChange={(v) => setField('website', v)} />
          <div className='sm:col-span-2'>
            <FormControl label='Store description' type='textarea' value={fields.description} onChange={(v) => setField('description', v)} />
          </div>
          <div className='sm:col-span-2'>
            <FormControl label='Business address' value={fields.address} onChange={(v) => setField('address', v)} />
          </div>
        </div>
      </FormCard>
      <FormCard title='Store mark' detail='Current logo appears across the storefront'>
        <div className='flex items-center gap-4'>
          <div className='flex h-16 w-16 items-center justify-center border border-[var(--border)] bg-[var(--ivory)] text-[var(--forest)]'>
            <Flower2 size={28} />
          </div>
          <div>
            <p className='text-xs font-semibold'>Sri Shloka wordmark</p>
            <p className='text-[10px] text-[var(--muted-foreground)]'>SVG · local demo asset</p>
          </div>
          <label className='btn btn-secondary !min-h-8 cursor-pointer text-xs'>
            Replace logo
            <input type='file' accept='image/*' className='sr-only' />
          </label>
        </div>
      </FormCard>
    </SettingsForm>
  );
}
