import { NavLink, Outlet } from 'react-router';

import loginUrl from '../assets/logo.svg';
import styles from './Layout.module.scss';

export const PublicLayout = () => (
  <div className={styles.layoutContainer}>
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={loginUrl} alt='logo' className={styles.logo} />
        <h1 className={styles.title}>CEFAC</h1>
      </div>
      <NavLink to='/login' className={({ isActive }) => `${styles.login} ${isActive ? `${styles.active}` : ''}`}>
        Login
      </NavLink>
    </header>
    <main>
      <Outlet />
    </main>
    <footer className={styles.footerContainer}>
      <p className={styles.copyright}>Copyright &copy; 2025, CEFAC. All Rights Reserved.</p>
    </footer>
  </div>
);
