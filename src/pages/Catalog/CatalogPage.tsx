import { Link } from 'react-router';
import styles from './scss/CatalogPage.module.scss'

export const CatalogPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <p className={styles.message}>
          Por el momento, no tenemos productos disponibles para mostrar,
          pero estamos trabajando para traerte novedades muy pronto. 
          Gracias por sus compresi&oacute;n
        </p>
        <br />
        <Link className={styles.link} to='..'>&larr; Volver</Link>
      </section>
    </div>
  );
}
