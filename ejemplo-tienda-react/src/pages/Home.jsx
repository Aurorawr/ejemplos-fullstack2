import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getProducts } from "../services/products";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import { useNavigate, useSearchParams } from "react-router";
import { ROUTE_PARAMS, ROUTE_PATHS } from "../utils/constants";

function Home() {
  // useNavigate nos permite redirigir manualmente a nuestras páginas. Pertenece a React Router
  let navigate = useNavigate();
  // useSearchParams nos permite acceder a los query params de la url
  let [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Las promesas puedes ser manejadas con .then() y .catch()
    // then es para cuando la promesa se resuelve correctamente
    // catch es para cuando la promesa falla
    getProducts().then((apiProducts) => {
      setProducts(apiProducts);
      setLoading(false);
    });
  }, []);

  const goToProductDetail = (id) => {
    // Redirigimos manualmente a esta ruta
    navigate(ROUTE_PATHS.PRODUCT_DETAIL_WITH_ID(id));
  };

  return (
    <>
      <h1>Millones de formas de jugar</h1>
      <h2>Revisa los juegos que tenemos para ti</h2>
      <hr />
      <Container>
        <Row className="align-items-stretch">
          {/* Operador ternario: si la primera condición (loadinf en este caso) es true,
          renderizo el primer componente (el que está entre el ? y el :), y en caso contrario
          el segundo (el que está después de los :) */}
          {loading ? (<Loading />) : (
            products.filter(p => !searchParams.get(ROUTE_PARAMS.SEARCH) || p.name.toLowerCase().includes(searchParams.get(ROUTE_PARAMS.SEARCH).toLowerCase()))
            .map((product) => <Col key={product.id} xs={12} sm={6} md={4} className="mb-4">
            <ProductCard
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
              action={() => goToProductDetail(product.id)}
              actionName="Ver detalle"
            />
          </Col>)
          )}
        </Row>
      </Container>
    </>
  )
}

export default Home;