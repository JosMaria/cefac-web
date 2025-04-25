import { BrowserRouter, Route, Routes } from 'react-router';

import { PublicLayout } from './components/Layout';
import { RegisterPage } from './pages/Register/RegisterPage';

export const MainRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<h1>Index Page</h1>} />
        <Route path='login' element={<h1>login page </h1>} />
        <Route path='register' element={<RegisterPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
