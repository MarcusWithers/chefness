import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import Burger from "../components/Burger";
import Button from "react-bootstrap/Button";
import FooterComponent from "../pages/components/FooterComponent";
import ContactComponent from "../pages/components/ContactComponent";

function Contact() {
  const navigate = useNavigate();

  const navigateToOrder = () => {
    navigate("/HowToOrder");
  };

  return (
    <div className="container-fluid text-center contact_page g-0">
      <Burger />
      <p className="pt-5 px-3 contact_text">
        If you need to contact me for anything regarding an order, feel free to
        dm me on <b>Instagram</b> or text me at <b>612-296-1993</b>
      </p>
      <p className="px-3 contact_text">
        Check the "Order" page to see details on how to order from me!
      </p>
      <div className="pt-5 pb-5">
        <Button variant="outline-danger" size="lg" onClick={navigateToOrder}>
          Order
        </Button>
      </div>
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}

export default Contact;
