import React from "react";

const OrderItem = ({ item }) => {
  return (
    <li>
      <h4>{item.name} - ${item.price}</h4>
      <p>Ingredients: {item.ingredients.join(", ")}</p>
      <button>Add to Cart</button>
    </li>
  );
};

export default OrderItem;
