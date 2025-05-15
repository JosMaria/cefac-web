import { Features } from './components/Features';
import { Notes } from './components/Notes';
import { Presentation } from './components/Presentation';
import styles from './scss/HomePage.module.scss';

export const HomePage = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Presentation />
      <Notes />
      <Features />
    </div>
  </div>
);

