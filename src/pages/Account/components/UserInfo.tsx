import styles from './scss/UserInfo.module.scss';

export const UserInfo = () => {
	return (
		<section className={styles.userContent}>
			<h2>Usuario: <span>JosMaria</span></h2>
			<h2>Rol: <span>ADMINISTRADOR</span></h2>
		</section>
	);
}
