import { useSearchParams } from "react-router";
import ProductCard from "../components/ProductCard";

const products = [
    {
        name: "Prueba",
        description: "Componente de prueba jiashuUSGsususgdsd",
        image: "https://tse3.mm.bing.net/th/id/OIP.3NF6h9-e5R6t-gYZ3uNEfAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        price: 800000
    },
    {
        name: "Prueba",
        description: "Componente de prueba jiashuUSGsususgdsd",
        image: "https://tse3.mm.bing.net/th/id/OIP.3NF6h9-e5R6t-gYZ3uNEfAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        price: 800000
    },
    {
        name: "Prueba",
        description: "Componente de prueba jiashuUSGsususgdsd",
        image: "https://tse3.mm.bing.net/th/id/OIP.3NF6h9-e5R6t-gYZ3uNEfAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        price: 800000
    },
    {
        name: "Prueba",
        description: "Componente de prueba jiashuUSGsususgdsd",
        image: "https://tse3.mm.bing.net/th/id/OIP.3NF6h9-e5R6t-gYZ3uNEfAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        price: 800000
    },
    {
        name: "Prueba",
        description: "Componente de prueba jiashuUSGsususgdsd",
        image: "https://tse3.mm.bing.net/th/id/OIP.3NF6h9-e5R6t-gYZ3uNEfAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        price: 800000
    },
    {
        name: "Prueba",
        description: "Componente de prueba jiashuUSGsususgdsd",
        image: "https://tse3.mm.bing.net/th/id/OIP.3NF6h9-e5R6t-gYZ3uNEfAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        price: 800000
    },
    {
        name: "Prueba",
        description: "Componente de prueba jiashuUSGsususgdsd",
        image: "https://tse3.mm.bing.net/th/id/OIP.3NF6h9-e5R6t-gYZ3uNEfAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        price: 800000
    },
]

function Products() {

    let [searchParams] = useSearchParams();

    return (
        <div>
            <h1>Productos</h1>
            <h3>Buscando: {searchParams.get("busqueda")}</h3>
            <p>Categoría: {searchParams.get("categoria")}</p>

            <div>
                {products.map(product => <ProductCard
                        name={product.name}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                    />
                )}
            </div>
        </div>
    );
}

export default Products;