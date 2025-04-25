import './styles/_index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { MainRoutes } from './MainRoutes.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
      <MainRoutes />
    </QueryClientProvider>
  </StrictMode>,
);
