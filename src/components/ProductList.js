// Style
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// State & Stores
import { useState } from "react";
import { observer } from "mobx-react";
import productStore from "../stores/productStore";

const ProductList = () => {
  const [query, setQuery] = useState("");

  const productList = productStore.products
    .filter((product) => product.name.includes(query))
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default observer(ProductList);
