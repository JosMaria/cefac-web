import './styles/_index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import { PublicLayout } from './components/Layout.tsx';
import { LoginPage } from './pages/Login/LoginPage.tsx';
import { AccountPage } from './pages/Account/AccountPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PublicLayout />}>
          <Route index element={<h1>Esta es la pagina para el catalogo</h1>} />
          <Route path='login' element={<LoginPage />} />
          <Route path='account' element={<AccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
