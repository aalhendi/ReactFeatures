import products from "../products.js";
import ProductItem from "./ProductItem.js";

const ProductList = () => {
    const productList = products.map((product) => (
        <ProductItem
            name={product.name}
            price={product.price}
            image={product.image}
            key={product.id}
        />
    ));

    return <div className="list">{productList}</div>;
};

export default ProductList;
