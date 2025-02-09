import React from "react";
import { useNavigate } from "react-router-dom";

const ShopOwnerDashboard = () => {
  const navigate = useNavigate();
    
  return (
    
    <div>
      <h2>Shop Owner Dashboard</h2>
      <button onClick={() => navigate("/order")} className="view-orders-btn">
        View Items
      </button>
      <button>View Orders</button>
      <button>Manage Inventory</button>
      <button>Add/Remove Order Items</button>
      

      
    </div>
  );
};

export default ShopOwnerDashboard;
