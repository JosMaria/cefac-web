import { BrowserRouter, Route, Routes } from 'react-router';

import { PublicLayout } from './components/Layout';
import { RegisterPage } from './pages/Register/RegisterPage';
import { LoginPage } from './pages/Login/LoginPage';
import { AccountPage } from './pages/Account/AccountPage';
import { HomePage } from './pages/Home/HomePage';

export const MainRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path='catalog' element={<h1>Here is catalog</h1>} />
        <Route path='login' element={<LoginPage />} />
        <Route path='me' element={<AccountPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
