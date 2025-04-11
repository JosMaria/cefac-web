import styles from './Login.module.scss';

export const Login = () => {

    return (
        <dialog className={styles.dialogContent} open={true}>
            <div className={styles.position}>
                <section className={styles.modalContainer}>
                    <h1>Inicio de Sesión</h1>
                    <div className={styles.inputContainer}>
                        <label htmlFor="username">Usuario</label>
                        <input id="username" type="text" />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="username">Contrase&#241;a</label>
                        <input id="username" type="text" />
                    </div>
                    <button className={styles.button} type="submit">Iniciar Sesión</button>
                </section>
            </div>
        </dialog>
    );
}
