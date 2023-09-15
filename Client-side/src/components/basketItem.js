import React from "react";
import "../pages/basket";

export default function BasketItem(props) {
  return (
    <li className="innerList">
      <img className="productImg" src={props.image} alt="product"></img>
      <ul>
        <li className="innerList title">{props.name}</li>
        <li className="innerList price">    {props.price} DKK</li>
        <li className="innerList price">    {props.size}</li>
      </ul>
      {props.button}
    </li>
  );
}