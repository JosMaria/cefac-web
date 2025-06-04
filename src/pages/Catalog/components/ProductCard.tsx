import { Link } from 'react-router';

import styles from '../scss/ProductCard.module.scss';

type ProductCardProps = {
  id: string;
  name: string;
  tag: string;
  price: number;
  imageUrl: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({ name, tag, price, imageUrl }) => (
  <Link className={styles.cardContainer} to='login'>
    <div className={styles.imageContainer}>
      <img className={styles.image} src={imageUrl} alt={name} />
    </div>
    <div className={styles.infoContainer}>
      <p className={styles.tag}>{tag}</p>
      <p>{name}</p>
    </div>
  </Link>
);
