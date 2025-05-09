import { useState } from 'react';

import { InfoMessage } from './components/InfoMessage';
import { RegisterForm } from './components/RegisterForm';
import styles from './RegisterPage.module.scss';

export const RegisterPage = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.pageContainer}>
      <section className={styles.sectionContainer}>
        <header className={styles.headerContainer}>
          <div style={{ width: '25px', height: '25px' }}></div>
          <h1>Registro de Usuario</h1>
          <svg className={`${showInfo ? styles.invisible : ''} `} onClick={() => setShowInfo(true)}
            width='25' height='25' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx='12' cy='12' r='10' fill='#1E88E5' />
            <path d='M12 16V12' stroke='white' strokeWidth='2' strokeLinecap='round' />
            <circle cx='12' cy='8' r='1' fill='white' />
          </svg>
        </header>
        {showInfo && <InfoMessage close={() => setShowInfo(false)} />}
        <RegisterForm />
      </section>
    </div>
  );
};
