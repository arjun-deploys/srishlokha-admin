import { formatStatus } from '@/lib/format';

export function Status({ children }: { children: string }) {
  return <span className={`status ${formatStatus(children)}`}>{children}</span>;
}
