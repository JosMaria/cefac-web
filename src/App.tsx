import styles from './App.module.scss';
import { AccountPage } from './pages/Account/AccountPage.tsx';

function App() {

    return (
        <main className={styles.mainContent}>
            <AccountPage />
        </main>

    )
}

export default App
