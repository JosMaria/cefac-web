import styles from './scss/PersonalInfo.module.scss';

export const PersonalInfo = () => {
	return (
		<section className={styles.personalContainer}>
			<h1>Datos Personales</h1>
			<article className={styles.personalContent}>
				<div className={styles.inputContent}>
					<label htmlFor='name'>Nombre</label>
					<input id='name' type="text" value='Jose Maria' disabled />
				</div>

				<div className={styles.inputContent}>
					<label htmlFor='lastname'>Apellido</label>
					<input id='lastname' type="text" value='Aguilar Chambi' disabled />
				</div>

				<div className={styles.inputContent}>
					<label htmlFor='email'>Email</label>
					<input id='email' type="text" value='josmariaguilar@gmail.com' disabled />
				</div>

				<div className={styles.inputContent}>
					<label htmlFor='phone'>Telefono</label>
					<input id='phone' type="text" value='64852080' disabled />
				</div>
			</article>
		</section>
	);
}