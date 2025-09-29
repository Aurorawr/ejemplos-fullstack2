import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../services/products";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";

function ProductDetail() {
  // useParams nos permite ingresar a los path params declarados en la ruta
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id).then((prod) => {
      setProduct(prod);
    }).catch((error) => {
      console.error("Error obteniendo producto", error);
      setProduct(null);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [id]);

  // Puedo retornar más de un html de acuerdo a ciertas condiciones

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <ProductCard
      name={product.name}
      price={product.price}
      image={product.image}
      description={product.description}
    />
  )
}

export default ProductDetail;