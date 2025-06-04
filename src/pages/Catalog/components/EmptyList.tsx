import { Link } from 'react-router';

import styles from '../scss/EmptyList.module.scss';

export const EmptyList = () => (
  <section className={styles.emptyListContainer}>
    <p className={styles.message}>
      Por el momento, no tenemos productos disponibles para mostrar,
      pero estamos trabajando para traerte novedades muy pronto.
      Gracias por sus compresi&oacute;n
    </p>
    <br />
    <Link className={styles.link} to='..'>&larr; Volver</Link>
  </section>
);
