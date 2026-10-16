import { FormCard, FormControl, ImageBox } from '@/components/common';
import { SettingsForm } from '../components/SettingsForm';
import { useSettings } from '../SettingsContext';

export function ContentSettingsPage() {
  const { fields, setField } = useSettings();
  return (
    <SettingsForm>
      <FormCard title='Homepage story' detail='Keep the words as warm as the flowers'>
        <FormControl label='Hero title' value={fields.hero} onChange={(v) => setField('hero', v)} />
        <div className='mt-4'>
          <FormControl label='Hero description' type='textarea' value={fields.heroDescription} onChange={(v) => setField('heroDescription', v)} />
        </div>
      </FormCard>
      <FormCard title='Seasonal banner' detail='A locally previewed storefront image'>
        <ImageBox kind='flowers' />
        <div className='mt-4'>
          <FormControl label='Banner note' value={fields.banner} onChange={(v) => setField('banner', v)} />
        </div>
      </FormCard>
      <FormCard title='About & contact copy' detail='Sample storefront content'>
        <FormControl label='About the store' type='textarea' value={fields.about} onChange={(v) => setField('about', v)} />
        <div className='mt-4'>
          <FormControl label='Footer text' value={fields.footer} onChange={(v) => setField('footer', v)} />
        </div>
      </FormCard>
    </SettingsForm>
  );
}
