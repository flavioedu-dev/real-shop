import styles from "./ItemCart.module.css"

interface ItemCartProps {
  src: string;
  alt: string;
  title: string;
  size: string;
  price: number;
}

const ItemCart = ({src, alt, title, size, price}: ItemCartProps) => {
  return (
      <div className={styles.item_cart}>
        <img src={src} alt={alt} />
        <div>
          <p>{title}</p>
          <span>{size}</span>
        </div>
        <span>${price}</span>
      </div>
  )
}

export default ItemCart


