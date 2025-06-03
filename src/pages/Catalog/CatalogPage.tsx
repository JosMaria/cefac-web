import { Link } from 'react-router';

import styles from './scss/CatalogPage.module.scss';

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
    imageUrl: 'https://media.gettyimages.com/id/173616090/es/foto/frascos-de-cosm%C3%A9ticos.jpg?s=612x612&w=0&k=20&c=fJ3YbFzLhef_WwEfF2MQG67LSvkeKow9poe3PZglVb4='
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
          PRODUCTS.map(product => 
            <div className={styles.cardContainer} key={product.name}>
              <img src={product.imageUrl} alt={product.name} width={300} />
              <h4>{product.name}</h4>
              <h4>{product.tag}</h4>
              <p>{product.price} Bs</p>
            </div>
          )
      }
    </div>
  );
}
