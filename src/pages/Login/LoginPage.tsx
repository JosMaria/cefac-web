import toast from 'react-hot-toast';

import logoUrl from '../../assets/logo.svg';
import { LoginForm } from './components/LoginForm';
import styles from './scss/LoginPage.module.scss';

export const LoginPage = () => {
  return (
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
}

const notifySuccess = (message: string) => toast.success(message, {
  style: {
    backgroundColor: 'ivory',
    borderRadius: '0',
    borderBottomColor: 'green',
    borderBottomStyle: 'solid',
    borderBottomWidth: '0.3rem',
    fontSize: '0.9rem',
    marginRight: 0,
  }
});

const notifyError = (message: string) => toast.error(message, {
  style: {
    backgroundColor: 'lightpink',
    borderRadius: '0',
    borderBottomColor: 'red',
    borderBottomStyle: 'solid',
    borderBottomWidth: '0.3rem',
    fontSize: '0.9rem',
    marginRight: 0,
  }
});
