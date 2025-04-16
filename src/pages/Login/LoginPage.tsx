import logoUrl from '../../assets/logo.svg';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <img className={styles.logo} src={logoUrl} alt='Logo' />
          <h1 className={styles.title}>Inicio de Sesión</h1>
        </header>
        <Form />
      </div>
    </section>
  );
}

const Form = () => (
  <form className={styles.formContainer}>
    <div className={styles.inputContainer}>
      <label htmlFor='username'>Usuario</label>
      <input id='username' type='text' />
    </div>
    <div className={styles.inputContainer}>
      <label htmlFor='username'>Contrase&#241;a</label>
      <input id='username' type='text' />
    </div>
    <button className={styles.submit} type='submit'>Iniciar Sesión</button>
  </form>
);
