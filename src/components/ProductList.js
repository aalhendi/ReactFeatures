// Style
import { ListWrapper } from "../styles";
import { AddIcon } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import ProductModal from "../modals/productModal";
// State & Stores
import { useState } from "react";
import { observer } from "mobx-react";
import productStore from "../stores/productStore";

const ProductList = () => {
  const [query, setQuery] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const productList = productStore.products
    .filter((product) => product.name.includes(query))
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <AddIcon size="2em" onClick={openAddModal} />
      <ProductModal
        isAddModalOpen={isAddModalOpen}
        closeAddModal={closeAddModal}
      />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default observer(ProductList);
