
function ProductCard(props) {
    const { name, description, image, price } = props;

    return (
        <div>
            <img src={image} alt={"imagen "+name} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p><strong>$ {price}</strong></p>
        </div>
    );
}

export default ProductCard;