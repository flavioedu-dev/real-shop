import styles from "./Home.module.css";

// Hooks
import { useEffect, useState } from "react";

// Components
import Header from "../../components/Header/Header";
import Item from "../../components/Item/Item";

const shoes = [
  {},
  {}
]

const Home = () => {
  const [descript, setDescript] = useState(-1);

  useEffect(() => {
    console.log(descript);
  }, [descript]);

  return (
    <main className={styles.Home}>
      <Header></Header>
      <section>
        <Item
          imageSrc="https://imgnike-a.akamaihd.net/1920x1920/02362651.jpg"
          imageAlt="Shoe 1"
          price={100}
          description="Nike Shoe White"
          isActive={descript === 0}
          onshow={() => setDescript(0)}
          unshow={() => setDescript(-1)}
        />
        <Item
          imageSrc="https://static.dafiti.com.br/p/Nike-T%C3%AAnis-Nike-Air-Force-1-'07-Masculino-6736-31652411-1-zoom.jpg"
          imageAlt="Shoe 2"
          price={250}
          description="Nike Shoe Black"
          isActive={descript === 1}
          onshow={() => setDescript(1)}
          unshow={() => setDescript(-1)}
        />
      </section>
    </main>
  );
};

export default Home;
