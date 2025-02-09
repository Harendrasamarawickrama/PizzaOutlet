import React, { useState } from "react";
import Login from "./components/Login";
import ShopOwnerDashboard from "./components/ShopOwnerDashboard";
import CustomerDashboard from "./components/CustomerDashboard";

import "./App.css";

const App = () => {
  const [userType, setUserType] = useState(null);

  const handleLogin = (role) => {
    setUserType(role);
  };

  return (
    <div className="App">
      {!userType ? (
        <Login onLogin={handleLogin} />
      ) : userType === "owner" ? (
        <ShopOwnerDashboard />
      ) : (
        <CustomerDashboard />
      )}
      
    </div>
  );
};

export default App;
