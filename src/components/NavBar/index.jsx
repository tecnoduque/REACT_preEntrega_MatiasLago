import React from "react"
import CartWidget from "../CartWidget"
import Logo from '../../img/glaciar-ar.png'
import "./style.css"



function NavBar() {
  return (
    <div className="contenedorNav">
        <div className="logo"> <img src={Logo} alt="Logo glaciar-ar " /></div>
        <ul className="liNav">
      <a href="#"><li>Excursiones</li></a>
      <a href="#"><li>Ofertas</li></a>
      <a href="#"><li>Contacto</li></a>
        </ul>
      <div className="carrito">
        
        <CartWidget />
      </div>
    </div>
  );
}
export default NavBar
