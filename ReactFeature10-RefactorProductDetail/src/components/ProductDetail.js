import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { useParams, Redirect, Link } from "react-router-dom";

const ProductDetail = (props) => {
  const productSlug = useParams().productSlug;
  const product = props.products.find(
    (product) => product.slug === productSlug
  );

  if (!product) {
    return <Redirect to="/products" />;
  }
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <Link to="/products">
        <button>Exit</button>
      </Link>
      <DeleteButton
        product={product}
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
