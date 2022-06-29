import React from "react";
import "../styles/styles.css";
import Burger from "../components/Burger";
import FooterComponent from "../pages/components/FooterComponent";
import OrderInstructions from "../pages/components/OrderInstructions";

function HowToOrder() {
  return (
    <div className="container-fluid text-center g-0">
      <Burger />
      <OrderInstructions />
      <FooterComponent />
    </div>
  );
}

export default HowToOrder;
