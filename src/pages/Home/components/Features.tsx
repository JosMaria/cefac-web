import { JSX } from 'react';

import styles from '../scss/Features.module.scss';

const TimeIcon = () => (
  <svg width='3rem' viewBox='0 0 24 24' fill='#FFF' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm1-11h4v2h-6V6h2v4z'
      fillRule='evenodd' />
  </svg>
);

const PeopleIcon = () => (
  <svg width='3rem' viewBox='0 0 24 24' fill='#FFF' xmlns='http://www.w3.org/2000/svg'>
    <path d='M14 13a3.954 3.954 0 0 0 .142 1H9.858A3.954 3.954 0 0 0 10 13zm-3.5-4h3a2.486 2.486 0 0 1 1.945.949 3.992 3.992 0 0 1 .839-.547A3.485 3.485 0 0 0 13.5 8h-3a3.485 3.485 0 0 0-2.784 1.402 3.992 3.992 0 0 1 .84.547A2.486 2.486 0 0 1 10.5 9zM9 4a3 3 0 1 1 3 3 3.003 3.003 0 0 1-3-3zm1 0a2 2 0 1 0 2-2 2.002 2.002 0 0 0-2 2zM4.5 17h3a3.504 3.504 0 0 1 3.5 3.5V23H1v-2.5A3.504 3.504 0 0 1 4.5 17zm0 1A2.503 2.503 0 0 0 2 20.5V22h8v-1.5A2.503 2.503 0 0 0 7.5 18zM6 16a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-1a2 2 0 1 0-2-2 2.002 2.002 0 0 0 2 2zm17 5.5V23H13v-2.5a3.504 3.504 0 0 1 3.5-3.5h3a3.504 3.504 0 0 1 3.5 3.5zm-1 0a2.503 2.503 0 0 0-2.5-2.5h-3a2.503 2.503 0 0 0-2.5 2.5V22h8zM21 13a3 3 0 1 1-3-3 3.003 3.003 0 0 1 3 3zm-1 0a2 2 0 1 0-2 2 2.002 2.002 0 0 0 2-2z' />
    <path fill='none' d='M0 0h24v24H0z' />
  </svg>
);

const ProductIcon = () => (
  <svg width='3rem' viewBox='-2 0 60 60' version='1.1' xmlns='http://www.w3.org/2000/svg'>
    <g id='People' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='Icon-24' transform='translate(-2.000000, 0.000000)' fill='#fff'>
        <path d='M30.9971,32 C30.9971,33.103 31.8941,34 32.9971,34 C34.1001,34 34.9971,33.103 34.9971,32 C34.9971,30.897 34.1001,30 32.9971,30 C31.8941,30 30.9971,30.897 30.9971,32 M30.9971,23 C30.9971,21.897 30.1001,21 28.9971,21 C27.8941,21 26.9971,21.897 26.9971,23 C26.9971,24.103 27.8941,25 28.9971,25 C30.1001,25 30.9971,24.103 30.9971,23 M26.9971,36 C26.4451,36 25.9971,36.449 25.9971,37 C25.9971,37.551 26.4451,38 26.9971,38 C27.5491,38 27.9971,37.551 27.9971,37 C27.9971,36.449 27.5491,36 26.9971,36 M26.9971,34 C28.6511,34 29.9971,35.346 29.9971,37 C29.9971,38.654 28.6511,40 26.9971,40 C25.3431,40 23.9971,38.654 23.9971,37 C23.9971,35.346 25.3431,34 26.9971,34 M57.6521,58.206 C57.0401,59.363 55.7421,60 53.9971,60 L5.9971,60 C3.6561,60 2.7101,58.86 2.3551,58.18 C1.6781,56.885 1.9771,55.153 3.1761,53.429 L21.1651,26.445 C21.1651,26.445 21.9971,25.109 21.9971,23 L21.9971,9 C21.9971,8.448 22.4441,8 22.9971,8 C23.5501,8 23.9971,8.448 23.9971,9 L23.9971,23 C23.9971,25.735 22.8821,27.474 22.8341,27.547 L11.7031,44.243 C14.9111,44.693 22.7511,45.531 28.7551,44.03 C36.9031,41.994 44.9031,43.946 45.2391,44.03 C45.7751,44.164 46.1011,44.706 45.9671,45.242 C45.8331,45.777 45.2871,46.101 44.7551,45.97 C44.6781,45.952 36.8911,44.059 29.2391,45.97 C26.4651,46.664 23.3781,46.895 20.5001,46.895 C15.9711,46.895 11.9581,46.324 10.4761,46.085 L4.8291,54.555 C4.0701,55.646 3.8111,56.649 4.1281,57.254 C4.4671,57.903 5.4441,58 5.9971,58 L53.9971,58 C54.9511,58 55.6401,57.734 55.8841,57.271 C56.1931,56.686 55.9271,55.673 55.1711,54.563 L37.1651,27.555 C37.1171,27.483 35.9971,25.771 35.9971,23 L35.9971,5 C35.9971,4.448 36.4441,4 36.9971,4 L37.9971,4 L37.9971,2 L21.9971,2 L21.9971,4 L32.9971,4 C33.5501,4 33.9971,4.448 33.9971,5 C33.9971,5.552 33.5501,6 32.9971,6 L21.9971,6 C20.8941,6 19.9971,5.103 19.9971,4 L19.9971,2 C19.9971,0.897 20.8941,0 21.9971,0 L37.9971,0 C39.1001,0 39.9971,0.897 39.9971,2 L39.9971,4 C39.9971,5.103 39.1001,6 37.9971,6 L37.9971,23 C37.9971,25.137 38.8201,26.433 38.8291,26.445 L56.8291,53.445 C58.0401,55.222 58.3341,56.916 57.6521,58.206' />
      </g>
    </g>
  </svg>
);

type IconType = 'time' | 'people' | 'product';

type FeatureProps = {
  icon: IconType;
  children: JSX.Element;
};

const Feature: React.FC<FeatureProps> = ({ icon, children }) => (
  <article className={styles.featureContainer}>
    <div className={`${styles.iconContainer} ${icon === 'time' ? styles.timeColor : icon === 'people' ? styles.peopleColor : styles.productColor}`}>
      {icon === 'time' ? <TimeIcon /> : icon === 'people' ? <PeopleIcon /> : <ProductIcon />}
    </div>
    {children}
  </article>
);

export const Features = () => {
  const years = 9;
  const countAssistants = 10;
  const numberOfProducts = 20;

  return (
    <section className={styles.container}>
      <Feature icon='time'>
        <div className={styles.infoContainer}>
          <p className={styles.title}>{years}+ A&ntilde;os</p>
          <i className={styles.phrase}>Los primeros años son tu cimiento</i>
        </div>
      </Feature>
      <Feature icon='people'>
        <div className={styles.infoContainer}>
          <p className={styles.title}>{countAssistants}+ Practicantes</p>
          <i className={styles.phrase}>Cada esfuerzo los acerca a sus metas</i>
        </div>
      </Feature>
      <Feature icon='product'>
        <div className={styles.infoContainer}>
          <p className={styles.title}>{numberOfProducts}+ Productos</p>
          <i className={styles.phrase}>De nuestra pasión nacen las soluciones</i>
        </div>
      </Feature>
    </section>
  );
};
