import { Link, NavLink } from "react-router";

function Home() {

    return (
        <div>
            <h1>Home</h1>
            <NavLink to="/iniciar-sesion">Iniciar sesión</NavLink> 
        </div>
    );
}

export default Home;