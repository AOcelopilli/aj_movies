import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const header = () => {
  return (
    <header>
      <Navbar></Navbar>
      {/* <div className="header__menu">
        <NavLink exact to="/" className="header__logo">
          ¡Blockbusters!
        </NavLink>
        <button className="header__menu-btn">=</button>
      </div>
      <nav className="header__navbar">
        <NavLink
          exact
          to="/movies"
          activeClassName="active-link"
          className="header__link"
        >
          Movies
        </NavLink>
        <NavLink
          exact
          to="/tv-shows"
          activeClassName="active-link"
          className="header__link"
        >
          TV Shows
        </NavLink>
        <NavLink
          exact
          to="/search"
          activeClassName="active-link"
          className="header__link"
        >
          Search
        </NavLink>
      </nav> */}
    </header>
  );
};

export default header;
