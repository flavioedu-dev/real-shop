import styles from "./Home.module.css"

// Components
import Header from "../../components/Header/Header"

const Home = () => {
  return (
    <main className={styles.Home}>
      <Header></Header>
    </main>
  )
}

export default Home