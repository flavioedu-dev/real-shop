import styles from "./Home.module.css";

// Hooks
import { useEffect, useState } from "react";

// Components
import Header from "../../components/Header/Header";
import Item from "../../components/Item/Item";

const shoes = [
  {
    id: 1,
    name: "Nike Shoe White",
    price: 100,
    imageSrc: "https://imgnike-a.akamaihd.net/1920x1920/02362651.jpg",
  },
  {
    id: 2,
    name: "Nike Shoe Black",
    price: 250,
    imageSrc: "https://static.dafiti.com.br/p/Nike-T%C3%AAnis-Nike-Air-Force-1-'07-Masculino-6736-31652411-1-zoom.jpg",
  }
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
        {shoes.map(shoe => (
          <Item 
          imageSrc={shoe.imageSrc}
          imageAlt={shoe.name}
          price={shoe.price}
          description={shoe.name}
          isActive={descript === shoe.id}
          onshow={() => setDescript(shoe.id)}
          unshow={() => setDescript(-1)}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
