import React from 'react'
import cart from '../assets/icons/car.png';

const CartWidget = () => {
  return (
    <div className="carrito">
        <img src={cart} className="invertir cart" alt='carrito'/>
        <h2 id="articulos">5</h2>
    </div>
  )
}

export default CartWidget