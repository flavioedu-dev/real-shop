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
    price: 300,
    imageSrc: "https://imgnike-a.akamaihd.net/1920x1920/02362651.jpg",
  },
  {
    id: 2,
    name: "Nike Air Force 1 07 Black",
    price: 799.99,
    imageSrc: "https://static.dafiti.com.br/p/Nike-T%C3%AAnis-Nike-Air-Force-1-'07-Masculino-6736-31652411-1-zoom.jpg",
  },
  {
    id: 3,
    name: "Tênis Nike Air Force 1 Low Retro",
    price: 809.99,
    imageSrc: "https://authenticfeet.vteximg.com.br/arquivos/ids/259087-1000-1000/Tenis-Nike-Air-Force-1-Low-Retro-Branco-1.jpg?v=637897659401200000",
  },
  {
    id: 4,
    name: "Tênis Nike Air Force 1'07",
    price: 899.99,
    imageSrc: "https://imgnike-a.akamaihd.net/1300x1300/023215BP.jpg",
  },
  {
    id: 5,
    name: "Nike Air Force 1 Low",
    price: 600,
    imageSrc: "https://storage.googleapis.com/ssr_br/products/64d50114f7909efc20eaf24f00b52961.jpg",
  },
  {
    id: 6,
    name: "Nike Air Force 1 08 Black",
    price: 999.99,
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
          key={shoe.id} 
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
