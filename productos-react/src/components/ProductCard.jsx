
function ProductCard(props) {
    const { productName, productImage, productDescription } = props;

    return (
        <div class="col-12 col-md-4">
            <div class="card h-100">
                <img src={productImage} class="card-img-top" alt={productName} />
                <div class="card-body">
                    <h5 class="card-title">{productName}</h5>
                    <p class="card-text">{productDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;