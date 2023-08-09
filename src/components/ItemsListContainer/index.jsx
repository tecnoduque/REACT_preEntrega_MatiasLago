import React from "react";
import './style.css'

function ItemsListContainer({greeting}) {
  return (
    <div className="saludo">
      <h1>{greeting}</h1>
    </div>
  );
}
export default ItemsListContainer