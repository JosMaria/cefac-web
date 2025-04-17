import styles from './Account.module.scss';
import { PersonalInfo } from './components/PersonalInfo';
import { UserInfo } from './components/UserInfo';

export const AccountPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <UserInfo />
        <PersonalInfo />
      </div>
    </div>
  );
}
