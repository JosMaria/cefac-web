import { Link } from 'react-router';

import bioCleanImg from '../../assets/bioclean.png';
import cremImg from '../../assets/crem.png';
import { ProductCard } from './components/ProductCard';
import styles from './scss/CatalogPage.module.scss';
import { EmptyList } from './components/EmptyList';

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
      {PRODUCTS.length === 0 ? <EmptyList /> :
        <section className={styles.productList}>
          {PRODUCTS.map(product =>
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              tag={product.tag}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          )}
        </section>
      }
    </div>
  );
}
