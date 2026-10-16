import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { useParams } from 'react-router';
import { seed } from '@/data/seed';
import type { EntityData, EntityMap, Row, Section } from '@/types';

interface DataContextValue {
  data: EntityData;
  save: (section: Section, row: Row, id?: string) => void;
  update: (section: Section, id: string, row: Row) => void;
  remove: (section: Section, id: string) => void;
}

const DataContext = createContext<DataContextValue | null>(null);

/**
 * In-memory store backed by seed data. Swap the implementation of these three
 * mutations for API calls (e.g. TanStack Query mutations) when a backend exists.
 */
export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<EntityData>(seed);

  const save = useCallback((section: Section, row: Row, id?: string) => {
    setData((v) => {
      const rows = v[section] as Row[];
      return {
        ...v,
        [section]: id ? rows.map((x) => (x.id === id ? row : x)) : [row, ...rows],
      } as EntityData;
    });
  }, []);

  const update = useCallback((section: Section, id: string, row: Row) => {
    setData((v) => ({
      ...v,
      [section]: (v[section] as Row[]).map((x) => (x.id === id ? row : x)),
    }) as EntityData);
  }, []);

  const remove = useCallback((section: Section, id: string) => {
    setData((v) => ({
      ...v,
      [section]: (v[section] as Row[]).filter((x) => x.id !== id),
    }) as EntityData);
  }, []);

  const value = useMemo(() => ({ data, save, update, remove }), [data, save, update, remove]);
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

function useDataContext() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('Data hooks must be used within <DataProvider>');
  return ctx;
}

/** Rows + bound mutations for one section. */
export function useSection<S extends Section>(section: S) {
  const ctx = useDataContext();
  return useMemo(
    () => ({
      rows: ctx.data[section] as EntityMap[S][],
      save: (row: Row, id?: string) => ctx.save(section, row, id),
      update: (id: string, row: Row) => ctx.update(section, id, row),
      remove: (id: string) => ctx.remove(section, id),
    }),
    [ctx, section],
  );
}

/** The record identified by the `:id` route param. */
export function useRecord<S extends Section>(section: S) {
  const { id = '' } = useParams();
  const api = useSection(section);
  const record = api.rows.find((r) => r.id === id);
  return { id, record, ...api };
}
