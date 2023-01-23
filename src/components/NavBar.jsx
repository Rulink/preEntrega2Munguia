import React from "react";
import CartWidget from "./CartWidget";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

const NavBar = ({ carrito }) => {
  return (
    <nav>
      <div className="topPage">
        <Link to="/">
          <h1 className="brand">HeroGames</h1>
        </Link>
        <CartWidget carrito={carrito} />
      </div>
      <div className="bar">
        <NavButton texto="Videojuegos" />
        <NavButton texto="Juegos de Mesa" />
        <NavButton texto="TCG" />
        <NavButton texto="Comics y Mangas" />
        <NavButton texto="Coleccionables" />
      </div>
    </nav>
  );
};

export default NavBar;
