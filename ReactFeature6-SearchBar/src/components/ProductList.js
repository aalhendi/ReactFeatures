// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";

//useState
import { useState } from "react";

const ProductList = () => {
    const [query, setQuery] = useState("");

    const productList = products
        .filter(
            (product) =>
                product.name.toLocaleLowerCase().includes(query) ||
                product.price.toString().includes(query)
        )
        .map((product) => <ProductItem product={product} key={product.id} />);

    return (
        <div>
            <SearchBar setQuery={setQuery} />
            <ListWrapper>{productList}</ListWrapper>
        </div>
    );
};

export default ProductList;
