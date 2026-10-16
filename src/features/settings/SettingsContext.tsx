import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { DEMO_USER } from '@/config/demo';

const initialPrefs = {
  orders: true,
  lowStock: true,
  support: true,
  wholesale: true,
  admin: true,
  emailOrders: true,
  emailStock: false,
  emailSupport: true,
  emailWholesale: true,
  emailAdmin: true,
};
const initialFields = {
  hero: 'Flowers with the fragrance of home.',
  heroDescription:
    'Weekly imports of fresh flowers, hand-strung garlands and devotional essentials—handled with care and delivered across the US.',
  banner: 'A fresh arrival every week',
  about:
    'From fresh flower arrivals to the small rituals of home, Sri Shloka brings thoughtful devotional goods to communities across the US.',
  footer: 'Fresh flowers. Familiar rituals. A little closer to home.',
  store: 'Sri Shloka',
  email: 'hello@sri-shloka.demo',
  phone: '+1 (732) 555-0188',
  website: 'sri-shloka.demo',
  description: 'Fresh flowers and devotional goods with the fragrance of home.',
  address: 'Edison, New Jersey · United States',
};

export type PrefKey = keyof typeof initialPrefs;
export type FieldKey = keyof typeof initialFields;

interface SettingsContextValue {
  prefs: typeof initialPrefs;
  togglePref: (key: PrefKey) => void;
  fields: typeof initialFields;
  setField: (key: FieldKey, value: string) => void;
  profileName: string;
  setProfileName: (name: string) => void;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

/** Keeps settings state alive while navigating between settings tabs. */
export function SettingsProvider({ children }: { children: ReactNode }) {
  const [prefs, setPrefs] = useState(initialPrefs);
  const [fields, setFields] = useState(initialFields);
  const [profileName, setProfileName] = useState<string>(DEMO_USER.name);

  const value = useMemo<SettingsContextValue>(
    () => ({
      prefs,
      togglePref: (key) => setPrefs((v) => ({ ...v, [key]: !v[key] })),
      fields,
      setField: (key, val) => setFields((v) => ({ ...v, [key]: val })),
      profileName,
      setProfileName,
    }),
    [prefs, fields, profileName],
  );
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within <SettingsProvider>');
  return ctx;
}
