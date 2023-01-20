import React from 'react'

const handleClick = ()=>{
    alert("Navegando!")
}

const NavButton = (texto) => {
  return (
    <button onClick={handleClick} className="btn">{texto.texto}</button>
  )
}

export default NavButton