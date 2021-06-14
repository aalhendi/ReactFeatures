// Styling
import { ProductWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <div>
      <ProductWrapper onClick={() => props.setProduct(product)}>
        <img alt={product.name} src={product.image} />
        <p>{product.name}</p>
        <p className="product-price">{product.price} KD</p>
      </ProductWrapper>
      <DeleteButton
        product={product}
        deleteProduct={props.deleteProduct}
        setProduct={props.setProduct}
      />
    </div>
  );
};

export default ProductItem;
