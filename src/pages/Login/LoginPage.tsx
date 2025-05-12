import { useForm } from 'react-hook-form';

import logoUrl from '../../assets/logo.svg';
import styles from './scss/LoginPage.module.scss';
import { useAuthentication } from './useAuthentication';

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

const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormType>();
  const { mutate, isPending } = useAuthentication();

  return (
    <div className={styles.formContainer}>
      <form className={styles.formContent} onSubmit={handleSubmit(form => mutate(form))}>
        <div className={styles.inputContainer}>
          <label htmlFor='username'>Usuario</label>
          <input {...register('username')} id='username' type='text' autoComplete='off' />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='password'>Contrase&#241;a</label>
          <input {...register('password')} id='password' type='password' />
        </div>
        <button className={`${styles.buttonGreen} ${isPending ? styles.pending : ''}`} type='submit'>
          {isPending ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
      </form>
    </div>
  );
}