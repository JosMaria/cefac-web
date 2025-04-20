import styles from './RegisterPage.module.scss';

export const RegisterPage = () => {

  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <h1>Registro de Usuario</h1>
        <form className={styles.formContainer}>
          <article className={styles.inputContainer}>
            <div>
              <label htmlFor='name'>Nombre</label>
              <input id='name' type='text' autoComplete='off' />
            </div>
            <div>
              <label htmlFor='lastname'>Apellido</label>
              <input id='lastname' type='text' autoComplete='off' />
            </div>
            <div>
              <label htmlFor='phone'>N&uacute;mero</label>
              <input id='alias' type='number' autoComplete='off' />
            </div>
            <div>
              <label htmlFor='alias'>Alias</label>
              <input id='alias' type='text' autoComplete='off' />
            </div>
            <div>
              <label htmlFor='username'>Nombre de Usuario</label>
              <input id='username' type='text' autoComplete='off' />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input id='email' type='text' autoComplete='off' />
            </div>
          </article>
          <button>Registrar</button>
        </form>
      </section>

    </div>
  );
}