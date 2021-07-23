import products from "../products.js";
import ProductItem from "./ProductItem.js";
import { ListWrapper } from "../styles.js";

const ProductList = () => {
  const productList = products.map((product) => (
    <ProductItem
      name={product.name}
      price={product.price}
      image={product.image}
      key={product.id}
    />
  ));

  return <ListWrapper>{productList}</ListWrapper>;
};

export default ProductList;
