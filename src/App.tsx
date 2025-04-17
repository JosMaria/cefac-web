import styles from './App.module.scss';
import { LoginPage } from './pages/Login/LoginPage.tsx';

function App() {

    return (
        <main className={styles.mainContent}>
            <LoginPage />
        </main>

    )
}

export default App
