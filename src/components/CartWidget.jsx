import React from 'react'
import cart from '../assets/icons/car.png';

const CartWidget = ({carrito}) => {
  return (
    <div className="carrito">
        <img src={cart} className="invertir cart" alt='carrito'/>
        <h2 id="articulos">{carrito}</h2>
    </div>
  )
}

export default CartWidget