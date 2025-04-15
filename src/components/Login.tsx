import logoUrl from '../assets/logo.svg';
import styles from './Login.module.scss';

export const Login = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<header className={styles.header}>
					<img src={logoUrl} alt='Logo' width={90} />
					<h1 className={styles.title}>Inicio de Sesión</h1>
				</header>
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
			</div>
		</section >
	);
}
