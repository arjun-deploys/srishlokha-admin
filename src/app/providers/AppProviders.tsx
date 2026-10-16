import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DataProvider } from '@/store/DataProvider';
import { RoleProvider } from '@/store/RoleProvider';

const queryClient = new QueryClient();

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <RoleProvider>
        <DataProvider>{children}</DataProvider>
      </RoleProvider>
    </QueryClientProvider>
  );
}
