import React, { useState } from "react";

const OrderStatus = () => {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  const handleCheckStatus = () => {
    
    const orderStatuses = {
      "12345": "Placed",
      "12346": "Preparing",
      "12347": "Dispatched",
      "12348": "Delivered",
    };
    setStatus(orderStatuses[orderId] || "Order ID not found");
  };

  return (
    <div>
      <h2>Track Order Status</h2>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={handleCheckStatus}>Check Status</button>
      {status && <p>Order Status: {status}</p>}
    </div>
  );
};

export default OrderStatus;
