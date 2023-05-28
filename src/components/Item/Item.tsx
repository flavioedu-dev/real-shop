import styles from "./Item.module.css"

import { Card, CardBody, CardFooter, Image, Heading, Divider } from "@chakra-ui/react"

interface ItemProps {
  imageSrc: string;
  imageAlt: string;
  price: number;
  description: string;
  isActive: boolean;
  onshow: React.MouseEventHandler<HTMLDivElement>;
  unshow: React.MouseEventHandler<HTMLDivElement>;
}

const Item = ({ imageSrc, imageAlt, price, description, isActive, onshow, unshow }: ItemProps) => {

  return (
    <Card maxW="250px" className={styles.Item} onMouseOver={onshow} onMouseOut={unshow}>
          <CardBody>
            <Image src={imageSrc} alt={imageAlt} borderRadius="lg"/>
          </CardBody>
          <Divider />
          <CardFooter display="flex" flexDirection="column">
            <Heading fontSize="1.5rem" fontWeight={500}>R${price} <span>x10 sem juros</span></Heading>
            
            {isActive && <p>{description}</p>}
          </CardFooter>
        </Card>
  )
}

export default Item