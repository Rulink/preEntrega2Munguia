import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import data from "./data.json";
import Mantenimiento from "./components/Mantenimiento";

function App() {
  const [carrito, setCarrito] = useState(0);

  return (
    <div>
      <NavBar carrito={carrito} />
      <Routes>
        <Route path="/" element={<h1>BIENVENIDO</h1>} />
        <Route path="/videojuegos" element={<h1>Vijeojuegos</h1>} />
        <Route path="/videojuegos/:name" element={<ItemDetail data={data} />} />
        <Route path="/juegos De Mesa" element={<Mantenimiento/>} />
        <Route path="/juegos De Mesa:name" element={<ItemDetail data={data} />} />
        <Route path="/tcg" element={<h1>TCG</h1>} />
        <Route path="/tcg:name" element={<ItemDetail data={data} />} />
        <Route path="/comics y mangas" element={<h1>Comics</h1>} />
        <Route path="/comics y mangas:name" element={<ItemDetail data={data} />} />
        <Route path="/coleccionables" element={<h1>Colecciobables</h1>} />
        <Route path="/coleccionables:name" element={<ItemDetail data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
