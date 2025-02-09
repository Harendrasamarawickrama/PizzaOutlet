import React from "react";
import OrderItem from "./OrderItem";

const orderItems = [
  { id: 1, name: "Pepperoni Pizza", price: 5.99, ingredients: ["Pepperoni", "Cheese", "Dough"] },
  { id: 2, name: "Cheesy Onion Pizza", price: 6.99, ingredients: ["Cheese", "Onions", "Dough"] },
];

const OrderItemList = () => {
  return (
    <div>
      <ul>
        {orderItems.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default OrderItemList;
