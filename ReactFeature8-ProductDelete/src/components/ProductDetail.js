import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductDetail = (props) => {
  return (
    <DetailWrapper>
      <h1>{props.product.name}</h1>
      <img src={props.product.image} alt={props.product.name} />
      <p>{props.product.description}</p>
      <p>{props.product.price} KD</p>
      <button onClick={() => props.setProduct(null)}>Exit</button>
      <DeleteButton
        product={props.product}
        deleteProduct={props.deleteProduct}
        setProduct={props.setProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
