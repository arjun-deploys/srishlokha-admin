import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router';
import { paths } from '@/app/router/paths';
import { useSection } from '@/store/DataProvider';
import type { Row, Section } from '@/types';

type NameResolver = (values: Row, old?: Row) => string;

/**
 * Shared create/edit form state for admins, roles, categories and products.
 * Values start from the existing record (edit) or empty (create).
 */
export function useEntityForm(section: Section, deriveName?: NameResolver, defaultStatus = 'Active') {
  const { id } = useParams();
  const navigate = useNavigate();
  const { rows, save } = useSection(section);
  const old = rows.find((r) => r.id === id) as Row | undefined;
  const isEdit = !!id;

  const [values, setValues] = useState<Row>(() => ({ ...old }));
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  const set = (key: string, value: unknown) => setValues((v) => ({ ...v, [key]: value }));
  const get = (key: string, fallback: any = '') => values[key] ?? old?.[key] ?? fallback;
  const cancel = () => navigate(paths.list(section));

  useEffect(() => {
    if (!saved) return;
    const t = setTimeout(() => navigate(paths.list(section)), 500);
    return () => clearTimeout(t);
  }, [saved, navigate, section]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const name = deriveName ? deriveName(values, old) : values.name;
    if (!name) {
      setError('Please add a name before saving.');
      return;
    }
    save(
      {
        ...old,
        ...values,
        id: old?.id ?? `${section.slice(0, 1)}${Date.now().toString().slice(-5)}`,
        name,
        status: values.status ?? old?.status ?? defaultStatus,
        createdAt: old?.createdAt ?? 'Mar 20, 2024',
      },
      old?.id,
    );
    setError('');
    setSaved(true);
  };

  return { isEdit, old, values, get, set, submit, cancel, saved, error };
}
