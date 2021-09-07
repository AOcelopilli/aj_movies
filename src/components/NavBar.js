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
      <header>
        <h2>Series y Peliculas</h2>
        <Router>
          <nav>
            <NavLink exact to="/" activeClassName="activeLink">
              Inicio
            </NavLink>
            <NavLink exact to="/peliculas" activeClassName="activeLink">
              Peliculas
            </NavLink>
            <NavLink exact to="/tv" activeClassName="activeLink">
              Programas de TV
            </NavLink>
          </nav>
          <div className="search">
            <input type="text" placeholder="Buscar... PENDIENTE" />
          </div>
        </Router>
      </header>
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/peliculas" component={Peliculas} />
            <Route exact path="/tv" component={Tv} />
            <Route path="*" component={Error404} />
          </Switch>
        </Router>
      </main>
    </>
  );
};

export default NavBar;
