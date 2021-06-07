import "./App.css";
import products from "./products.js";

function App() {
    const productList = products.map((product) => {
        return (
            <div className="product" key={product.id}>
                <img
                    className="product-image"
                    alt={product.name}
                    src={product.image}
                />
                <p className="caption">
                    {product.name} <br />
                    {product.price}KWD
                </p>
            </div>
        );
    });

    return (
        <div>
            <div>
                <h1 className="text">PaintShop</h1>
                <h4 className="text">Not real paint... Just pixels</h4>
                <img
                    id="home-image"
                    alt="PaintPeanutButter"
                    src="https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                />
            </div>
            <div className="list">{productList}</div>
        </div>
    );
}

export default App;
