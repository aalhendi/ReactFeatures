//Routers
import { Link } from "react-router-dom";
//Components
import DeleteButton from "./buttons/DeleteButton";
//Style
import { ProductWrapper } from "../styles";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <div>
      <ProductWrapper>
        <Link to={`/products/${product.slug}`}>
          <img alt={product.name} src={product.image} />
        </Link>
        <p>{product.name}</p>
        <p className="product-price">{product.price} KD</p>
      </ProductWrapper>
      <DeleteButton productId={product.id} />
    </div>
  );
};

export default ProductItem;
