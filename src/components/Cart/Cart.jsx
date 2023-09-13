/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Cart.css";

const Cart = ({ selectedActors, remaining, totalCost }) => {
  console.log(selectedActors);
  return (
    <div>
      <h2>Total actors: {selectedActors.length}</h2>
      <h4>remaining: {remaining}</h4>
      <h4>Total cost: {totalCost}</h4>
      {selectedActors.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </div>
  );
};

export default Cart;
