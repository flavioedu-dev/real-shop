import styles from "./Header.module.css"

// Components
import PrimaryInput from "../PrimaryInput/PrimaryInput"

import { ChangeEvent, useState } from "react"

const Header = () => {

  const [searchItem, setSearchItem] = useState("")

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value)

    console.log(searchItem)
  }

  return (
    <header className={styles.Header}>
      <span>Realshop</span>
      <PrimaryInput type="text" name="search-item" placeholder="Buscar produto..." onchange={handleSearch} value={searchItem} />
      <div></div>
    </header>
  )
}

export default Header