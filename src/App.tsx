import { AppRoutes } from './global/routes'
import styles from './global/App.module.scss'

function App() {
  return (
    <main className={styles.container}>
      <AppRoutes />
    </main>
  )
}

export default App
