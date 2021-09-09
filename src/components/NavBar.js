import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Inicio from "../pages/Inicio";
import Peliculas from "../pages/Peliculas";
import Tv from "../pages/Tv";
import Error404 from "../pages/Error404";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Router>
        <header>
          <NavLink exact to="/">
            <h2>¡Blockbusters!</h2>
          </NavLink>
          <nav>
            <NavLink exact to="/" activeClassName="active-link">
              Inicio
            </NavLink>
            <NavLink exact to="/peliculas" activeClassName="active-link">
              Películas
            </NavLink>
            <NavLink exact to="/tv" activeClassName="active-link">
              Series
            </NavLink>
          </nav>
          <div className="search">
            <input type="text" placeholder="Buscar... PENDIENTE" />
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/peliculas" component={Peliculas} />
          <Route exact path="/tv" component={Tv} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </>
  );
};

export default NavBar;
