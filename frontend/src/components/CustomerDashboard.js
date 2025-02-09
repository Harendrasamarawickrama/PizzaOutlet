import React from "react";
import OrderItemList from "./OrderItemList";

const CustomerDashboard = () => {
  return (
    <div>
      <h2>Customer Dashboard</h2>
      <h3>Available Order Items</h3>
      <OrderItemList />
    </div>
  );
};

export default CustomerDashboard;
