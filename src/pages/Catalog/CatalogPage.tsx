import { Link } from 'react-router';
import bioCleanImg from '../../assets/bioclean.png';
import cremImg from '../../assets/crem.png';
import styles from './scss/CatalogPage.module.scss';
import { url } from 'node:inspector';

type CatalogType = {
  id: string;
  name: string;
  tag: string;
  price: number;
  imageUrl: string;
};

const PRODUCTS: CatalogType[] = [
  {
    id: '1',
    name: 'ILUMINATE',
    tag: 'Crema Antiarrugas',
    price: 40,
    imageUrl: cremImg
  },
  {
    id: '2',
    name: 'BIOCLEAN',
    tag: 'Lavajillas',
    price: 15,
    imageUrl: bioCleanImg
  }
];

export const CatalogPage = () => {
  return (
    <div className={styles.container}>
      {PRODUCTS.length === 0 ?
        <section className={styles.section}>
          <p className={styles.message}>
            Por el momento, no tenemos productos disponibles para mostrar,
            pero estamos trabajando para traerte novedades muy pronto.
            Gracias por sus compresi&oacute;n
          </p>
          <br />
          <Link className={styles.link} to='..'>&larr; Volver</Link>
        </section>
        :
        <section className={styles.productList}>
          {PRODUCTS.map(product =>
            <Link className={styles.cardContainer} to='login' key={product.name}>
              <div className={styles.imageContainer}>
                <img className={styles.image} src={product.imageUrl} alt={product.name} />
              </div>
              <div className={styles.infoContainer}>
                <h3 className={styles.tag}>{product.tag}</h3>
                <i>{product.name}</i>
                <p className={styles.price}>Bs {product.price}</p>
              </div>
            </Link>
          )
          }
        </section>
      }
    </div>
  );
}
