// Styling
import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

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
      <DeleteButton productId={product.id} deleteProduct={props.deleteProduct} />
    </div>
  );
};

export default ProductItem;
