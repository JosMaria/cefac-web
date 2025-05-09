import styles from './Warning.module.scss';

type WarningProps = {
	msg: string;
};

export const Warning = ({ msg }: WarningProps) => {
	return (
		<article className={styles.container}>
			<header className={styles.header}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.308 4L2.492 18C2.221 18.482 2.387 19.091 2.869 19.362C3.016 19.441 3.182 19.483 3.351 19.483H20.649C21.202 19.483 21.649 19.036 21.649 18.483C21.649 18.314 21.607 18.148 21.528 18.001L13.692 4C13.421 3.518 12.812 3.352 12.33 3.623C12.117 3.742 11.942 3.917 11.823 4.13L10.308 4Z"
						fill="#FFC107" />
					<path d="M12 16V12" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
					<circle cx="12" cy="9" r="1" fill="#000000" />
				</svg>
				<h3>Consideraciones</h3>
			</header>
			<p>
				Este tutorial fue diseñado para personas que prefieren aprender haciendo y quieren ver algo tangible de manera rápida. Si prefieres aprender cada concepto paso a paso, comienza con Describir la UI.
			</p>
		</article>
	)
}