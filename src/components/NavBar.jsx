import React from "react";
import CartWidget from "./CartWidget";
import NavButton from "./NavButton";

const handleClick= () =>{
  alert("Navegando!")
}

const NavBar = () => {
  return (
    <nav>
      <div className="topPage">
        <h1 className="brand">HeroGames</h1>
        <CartWidget/>
      </div>
      <div className="bar">
        <NavButton texto="Videojuegos"/>
        <NavButton texto="Juegos de Mesa"/>
        <NavButton texto="TCG"/>
        <NavButton texto="Comics y Mangas"/>
        <NavButton texto="Coleccionables"/>
      </div>
    </nav>
  )
};

export default NavBar;
