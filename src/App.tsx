import styles from './App.module.scss';
import { AccountPage } from './pages/Account/AccountPage.tsx';
import { LoginPage } from './pages/Login/LoginPage.tsx';

function App() {

    return (
        <main className={styles.mainContent}>
            <AccountPage />
        </main>

    )
}

export default App
