import { ArrowUpRight, MoreHorizontal } from 'lucide-react';
import { Link } from 'react-router';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';
import { paths } from '@/app/router/paths';
import type { Column, Row, Section } from '@/types';

interface DataTableProps<T extends Row> {
  section: Section;
  rows: T[];
  columns: Column<T>[];
  nameKey: string;
  deletable: boolean;
  onDelete: (id: string) => void;
}

export function DataTable<T extends Row>({ section, rows, columns, nameKey, deletable, onDelete }: DataTableProps<T>) {
  return (
    <div className='table-wrap'>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.header}>{col.header}</th>
            ))}
            <th>
              <span className='sr-only'>Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={col.header} className={col.className}>
                  {col.cell(row)}
                </td>
              ))}
              <td>
                <div className='flex justify-end gap-1'>
                  <Link
                    to={paths.detail(section, row.id)}
                    aria-label={`View ${row[nameKey]}`}
                    className='btn btn-quiet !min-h-8 !px-2'
                  >
                    <ArrowUpRight size={15} />
                  </Link>
                  {deletable && (
                    <ConfirmDialog
                      title={`Delete ${row[nameKey]}?`}
                      description='This sample record will be removed from this browser session. This action cannot be undone.'
                      confirmLabel='Delete record'
                      onConfirm={() => onDelete(row.id)}
                      triggerAriaLabel={`Delete ${row[nameKey]}`}
                      triggerClassName='!min-h-8 !border-0 !bg-transparent !px-2 !text-[var(--muted-foreground)] hover:!bg-[var(--sand)]'
                    >
                      <MoreHorizontal size={15} />
                    </ConfirmDialog>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
