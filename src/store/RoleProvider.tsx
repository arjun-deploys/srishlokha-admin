import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { DEMO_ROLES, type DemoRole } from '@/config/access';
import { safeSession } from '@/lib/storage';

const STORAGE_KEY = 'sri-demo-role';

interface RoleContextValue {
  role: DemoRole;
  setRole: (role: DemoRole) => void;
  clearRole: () => void;
}

const RoleContext = createContext<RoleContextValue | null>(null);

const readRole = (): DemoRole => {
  const stored = safeSession.get(STORAGE_KEY);
  return (DEMO_ROLES as readonly string[]).includes(stored ?? '') ? (stored as DemoRole) : 'Super Admin';
};

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<DemoRole>(readRole);

  const setRole = useCallback((next: DemoRole) => {
    safeSession.set(STORAGE_KEY, next);
    setRoleState(next);
  }, []);
  const clearRole = useCallback(() => safeSession.remove(STORAGE_KEY), []);

  const value = useMemo(() => ({ role, setRole, clearRole }), [role, setRole, clearRole]);
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within <RoleProvider>');
  return ctx;
}
