import { useParams } from "react-router";

function ProductDetail() {

    let { idProducto } = useParams();

    return (
        <div>
            <h1>Detalle de producto con ID: {idProducto}</h1>
        </div>
    );
}

export default ProductDetail;