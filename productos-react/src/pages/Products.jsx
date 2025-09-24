import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { mostrarMensaje } from "../utils/alerts";

function Products() {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [products, setProducts] = useState([]);

    const agregarProducto = () => {
        const producto = {
            name: name,
            image: image,
            description: description,
        }

        setProducts([...products, producto]);

        mostrarMensaje(`Producto ${name} agregado`)
    }

    return (
        <>
            <div class="container mt-4">
                <div class="row">
                    <div class="col-12 col-md-3">
                        <h2>Agregar productos</h2>
                        <div class="mb-3">
                            <label for="product-name-input" class="form-label">Nombre del producto</label>
                            <input
                                type="text"
                                class="form-control"
                                id="product-name-input"
                                placeholder="Computador"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="product-img-input" class="form-label">Imagen del producto</label>
                            <input
                                type="text"
                                class="form-control"
                                id="product-img-input"
                                placeholder="Enlace de la imagen"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="product-description-input" class="form-label">Descripción del producto</label>
                            <textarea
                                class="form-control"
                                id="product-description-input"
                                rows="3"
                                placeholder="Descripción del producto"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <button
                            id="add-product-btn"
                            type="button"
                            class="btn btn-primary w-100"
                            onClick={agregarProducto}
                        >Agregar producto</button>
                    </div>
                    <div class="col-12 col-md-9">
                        <div class="container p-4 overflow-hidden">
                            <h2>Productos</h2>
                            <div id="products-container" class="row g-4">
                                {products.map(product => <ProductCard
                                    productName={product.name}
                                    productImage={product.image}
                                    productDescription={product.description}
                                />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;