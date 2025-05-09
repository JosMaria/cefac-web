import styles from './Information.module.scss';

type InformationProps = {
	msg: string;
};

export const Information = ({ msg }: InformationProps) => {
	return (
		<article className={styles.container}>
			<header className={styles.header}>
				<svg width='25' height='25' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<circle cx='12' cy='12' r='10' fill='#1E88E5' />
					<path d='M12 16V12' stroke='white' strokeWidth='2' strokeLinecap='round' />
					<circle cx='12' cy='8' r='1' fill='white' />
				</svg>
				<h3>Informaci&oacute;n</h3>
			</header>
			<p>
				Este tutorial fue diseñado para personas que prefieren aprender haciendo y quieren ver algo tangible de manera rápida. Si prefieres aprender cada concepto paso a paso, comienza con Describir la UI.
			</p>
		</article>
	)
}