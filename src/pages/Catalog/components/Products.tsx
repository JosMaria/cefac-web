import one from '../../../assets/1.png';
import two from '../../../assets/2.png';
import three from '../../../assets/3.png';
import four from '../../../assets/4.png';
import five from '../../../assets/5.png';
import six from '../../../assets/6.png';
import seven from '../../../assets/7.png';
import eight from '../../../assets/8.png';
import nine from '../../../assets/9.png';
import ten from '../../../assets/10.png';
import eleven from '../../../assets/11.png';
import twelve from '../../../assets/12.png';
import thirteen from '../../../assets/13.png';
import fourteen from '../../../assets/14.png';

import styles from '../scss/Products.module.scss';
import { ProductCard } from './ProductCard';

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
    imageUrl: one
  },
  {
    id: '2',
    name: 'BIOCLEAN',
    tag: 'Lavajillas',
    price: 15,
    imageUrl: two
  },
  {
    id: '3',
    name: 'BIOCLEAN',
    tag: 'Antisarro',
    price: 21,
    imageUrl: three
  },
  {
    id: '4',
    name: 'BIOCLEAN',
    tag: 'Desengrasante',
    price: 15,
    imageUrl: four
  },
  {
    id: '5',
    name: 'BIODERMA',
    tag: 'Jabon Liquido',
    price: 9,
    imageUrl: five
  },
  {
    id: '6',
    name: 'GERM OFF',
    tag: 'Alcohol en Gel',
    price: 10,
    imageUrl: six
  },
  {
    id: '7',
    name: 'GELDOL',
    tag: 'Gel Muscular',
    price: 10,
    imageUrl: seven
  },
  {
    id: '8',
    name: 'REUMADOL',
    tag: 'Unguento Antirreumatico',
    price: 10,
    imageUrl: eight
  },
  {
    id: '9',
    name: 'ALOE y PENCA',
    tag: 'Shampoo y acondicionador',
    price: 20,
    imageUrl: nine
  },
  {
    id: '10',
    name: 'CEBOLLA Y ROMERO',
    tag: 'Shampoo',
    price: 20,
    imageUrl: ten
  },
  {
    id: '11',
    name: 'MANZANILLA y CANELA',
    tag: 'Shampoo',
    price: 20,
    imageUrl: eleven
  },
  {
    id: '12',
    name: 'NOGAL, ORTEGA, MENTA Y CAFE',
    tag: 'Shampoo',
    price: 23,
    imageUrl: twelve
  },
  {
    id: '13',
    name: 'PROPOLEO Y MIEL',
    tag: 'Dulces',
    price: 7,
    imageUrl: thirteen
  },
  {
    id: '14',
    name: 'EUCALIPTO, WIRA WIRA  y JENGIBRE',
    tag: 'Dulces',
    price: 5,
    imageUrl: fourteen
  },
];

export const Products = () => {
  return (
    <section className={styles.productsContainer}>
      <FilterIcon />
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
  );
}


export const FilterIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill={color}
    {...props}
  >
    <path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2h1.17zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h7.17zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h1.17z"/>
  </svg>
);
