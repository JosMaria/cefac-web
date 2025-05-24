import styles from './Account.module.scss';
import { Activities } from './components/Activities';
import { PersonalInfo } from './components/PersonalInfo';
import { UserInfo } from './components/UserInfo';

export const AccountPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.infoContent}>
          <UserInfo />
          <PersonalInfo />
        </section>
        <Activities />
      </div>
    </div>
  );
}
