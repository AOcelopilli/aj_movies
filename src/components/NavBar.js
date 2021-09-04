import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Inicio from "../pages/Inicio";
import Peliculas from "../pages/Peliculas";
import Tv from "../pages/Tv";

const NavBar = () => {
  return (
    <div>
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
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/movies" component={Peliculas} />
          <Route exact path="/tv" component={Tv} />
        </Switch>
      </Router>
    </div>
  );
};

export default NavBar;
