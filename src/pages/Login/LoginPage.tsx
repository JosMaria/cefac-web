import logoUrl from '../../assets/logo.svg';
import { LoginForm } from './components/LoginForm';
import styles from './scss/LoginPage.module.scss';

export const LoginPage = () => (
  <section className={styles.container}>
    <div className={styles.content}>
      <header className={styles.header}>
        <img className={styles.logo} src={logoUrl} alt='Logo' />
        <h1 className={styles.title}>Inicio de Sesión</h1>
      </header>
      <LoginForm />
    </div>
  </section>
);
