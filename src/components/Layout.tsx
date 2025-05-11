import { NavLink, Outlet } from 'react-router';

import loginUrl from '../assets/logo.svg';
import styles from './Layout.module.scss';

export const PublicLayout = () => (
  <div className={styles.container}>
    <header className={styles.headerContent}>
      <img src={loginUrl} alt='logo' />
      <NavLink to='/login' className={({ isActive, isTransitioning }) => `${styles.icon} ${isActive ? `${styles.active}` : ''}`}>
        <svg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
          <path fillRule='evenodd' d='M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z' clipRule='evenodd' />
        </svg>
      </NavLink>
    </header>
    <main>
      <Outlet />
    </main>
    <footer className={styles.footerContent}>
      <hr />
      <p>&copy; 2024 Mi Empresa Farmacéutica. Todos los derechos reservados.</p>
    </footer>
  </div>
);
