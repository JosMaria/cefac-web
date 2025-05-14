import styles from '../scss/Relevant.module.scss';

export const Relevant = () => {
  return (
    <article className={styles.x}>
      <div className={styles.iconContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" fill="none" stroke="currentColor" />
          <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" />

          <circle cx="5.5" cy="13" r="0.5" fill="currentColor" />
          <circle cx="9.5" cy="13" r="0.5" fill="currentColor" />
          <circle cx="13.5" cy="13" r="0.5" fill="currentColor" />
          <circle cx="17.5" cy="13" r="0.5" fill="currentColor" />

          <circle cx="5.5" cy="18" r="0.5" fill="currentColor" />
          <circle cx="9.5" cy="18" r="0.5" fill="currentColor" />
          <circle cx="13.5" cy="18" r="0.5" fill="currentColor" />
          <circle cx="17.5" cy="18" r="0.5" fill="currentColor" />
        </svg>
      </div>
      <div>
        <p className={styles.title}>9+ A&ntilde;os</p>
        <i className={styles.phrase}>Los primeros años <br /> son tu cimiento</i>
      </div>
    </article>
  );
}