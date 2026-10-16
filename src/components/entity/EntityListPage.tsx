import { useMemo, useState } from 'react';
import { CircleAlert, Plus, Search } from 'lucide-react';
import { Link } from 'react-router';
import { PageHead } from '@/components/common';
import { paths } from '@/app/router/paths';
import { PAGE_SIZE } from '@/config/demo';
import { SECTION_META } from '@/config/sections';
import { useSection } from '@/store/DataProvider';
import type { Column, Row, Section } from '@/types';
import { DataTable } from './DataTable';
import { ListToolbar } from './ListToolbar';
import { Pagination } from './Pagination';

const ALL = 'All statuses';

interface EntityListPageProps<T extends Row> {
  section: Section;
  columns: Column<T>[];
  /** Field used for aria-labels / delete confirmation. Defaults to `name`. */
  nameKey?: string;
  /** Show the row delete action. */
  deletable?: boolean;
}

export function EntityListPage<T extends Row>({ section, columns, nameKey = 'name', deletable = false }: EntityListPageProps<T>) {
  const meta = SECTION_META[section];
  const { rows, remove } = useSection(section);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(ALL);
  const [page, setPage] = useState(1);

  const statusOptions = useMemo(
    () => [ALL, ...new Set(rows.flatMap((r) => [r.status, r.paymentStatus]).filter(Boolean))] as string[],
    [rows],
  );
  const filtered = useMemo(
    () =>
      rows.filter(
        (row) =>
          JSON.stringify(row).toLowerCase().includes(query.toLowerCase()) &&
          (status === ALL || row.status === status || row.paymentStatus === status),
      ),
    [rows, query, status],
  );
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const reset = () => {
    setQuery('');
    setStatus(ALL);
    setPage(1);
  };

  return (
    <div className='fade-in'>
      <PageHead
        title={meta.title}
        description={meta.description}
        eyebrow='Store workspace'
        action={
          meta.cta && (
            <Link to={paths.new(section)} className='btn btn-primary'>
              <Plus size={16} />
              {meta.cta}
            </Link>
          )
        }
      />
      <div className='panel overflow-hidden'>
        <ListToolbar
          testId={`search-${section}`}
          placeholder={`Search ${meta.title.toLowerCase()}…`}
          query={query}
          onQueryChange={(q) => {
            setQuery(q);
            setPage(1);
          }}
          status={status}
          statusOptions={statusOptions}
          onStatusChange={(s) => {
            setStatus(s);
            setPage(1);
          }}
          onReset={reset}
        />
        {!filtered.length ? (
          <div className='px-6 py-16 text-center'>
            <div className='mx-auto mb-3 flex h-11 w-11 items-center justify-center bg-[var(--sand)] text-[var(--forest)]'>
              <Search size={19} />
            </div>
            <p className='font-semibold'>Nothing found just yet</p>
            <p className='mt-1 text-xs text-[var(--muted-foreground)]'>Try a different search or clear your filters.</p>
            <button className='btn btn-secondary mt-4' onClick={reset}>
              Clear filters
            </button>
          </div>
        ) : (
          <DataTable
            section={section}
            rows={pageRows as unknown as T[]}
            columns={columns}
            nameKey={nameKey}
            deletable={deletable}
            onDelete={remove}
          />
        )}
        <Pagination page={page} total={filtered.length} onPageChange={setPage} />
      </div>
      <p className='mt-3 flex items-center gap-1.5 text-[10px] text-[var(--muted-foreground)]'>
        <CircleAlert size={12} /> Demonstration records only — no live storefront data is connected.
      </p>
    </div>
  );
}
