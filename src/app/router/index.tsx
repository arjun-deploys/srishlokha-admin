import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import { routes } from './routes';

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/',
});

export function AppRouter() {
  return <RouterProvider router={router} />;
}
