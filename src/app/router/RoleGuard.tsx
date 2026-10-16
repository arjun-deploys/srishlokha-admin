import { Navigate, Outlet } from 'react-router';
import { canAccess, type NavSection } from '@/config/access';
import { useRole } from '@/store/RoleProvider';
import { paths } from './paths';

/** Renders child routes only when the active role may access `section`. */
export function RoleGuard({ section }: { section: NavSection }) {
  const { role } = useRole();
  return canAccess(role, section) ? <Outlet /> : <Navigate to={paths.accessDenied} replace />;
}
