const ProductItem = (props) => {
    return (
        <div className="product" key={props.id}>
            <img
                className="product-image"
                alt={props.name}
                src={props.image}
            />
            <p className="caption">
                {props.name} <br />
                {props.price}KWD
            </p>
        </div>
    );
}

export default ProductItem;
