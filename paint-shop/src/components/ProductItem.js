import { ProductWrapper } from "../styles.js";

const ProductItem = (props) => {
  return (
    <ProductWrapper key={props.id}>
      <img className="product-image" alt={props.name} src={props.image} />
      <p>{props.name}</p>
      <p className="product-price">{props.price}KWD</p>
    </ProductWrapper>
  );
};

export default ProductItem;
