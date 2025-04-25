import styles from './InfoMessage.module.scss';

type InfoMessageProps = {
  close: () => void;
};

export const InfoMessage: React.FC<InfoMessageProps> = ({ close }) => (
  <article className={styles.infoContainer}>
    <div className={styles.infoHeader}>
      <div className={styles.title}>
        <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='12' cy='12' r='10' fill='#1E88E5' />
          <path d='M12 16V12' stroke='white' strokeWidth='2' strokeLinecap='round' />
          <circle cx='12' cy='8' r='1' fill='white' />
        </svg>
        <h3>Informaci&oacute;n</h3>
      </div>
      <svg
        className={styles.close} onClick={close}
        width='22' height='22' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M18 6L6 18' stroke='#808080' strokeWidth='2' strokeLinecap='round' />
        <path d='M6 6L18 18' stroke='#808080' strokeWidth='2' strokeLinecap='round' />
      </svg>
    </div>
    <ul>
      <li>La contrase&#241;a sera el n&uacute;mero de celular al momento de crear.</li>
      <li>Los unicos campos editables por el mismo usuario son el nombre de usuario y contrase&#241;a.</li>
    </ul>
  </article>
);
