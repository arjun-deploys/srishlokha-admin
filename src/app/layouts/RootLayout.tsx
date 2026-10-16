import { Outlet, useLocation } from 'react-router';
import { ErrorBoundary } from '@/components/error-boundary';

/** Top-level route element: resets the error boundary on every navigation. */
export function RootLayout() {
  const { pathname } = useLocation();
  return (
    <ErrorBoundary resetKey={pathname}>
      <Outlet />
    </ErrorBoundary>
  );
}
