import React from "react"
import './style.css'
import { BsFillCartFill } from "react-icons/bs"
import "./style.css"

function CartWidget() {
  return (
    <div className="carrito"> 
        <BsFillCartFill /><p>4</p>
    </div>
  );
}
export default CartWidget
