import React from "react";
import "../styles/styles.css";
import Burger from "../components/Burger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="container-fluid text-center contact_page">
      <Burger />
      <h1 className="pt-5 pb-3">Contact</h1>
      <p>
        If you need to contact me for anything regarding an order, feel free to
        dm me on <b>Instagram</b> or text me at <b>612-296-1993</b>
      </p>
      <div>
        <FontAwesomeIcon
          className="me-4 fa-3x icon"
          icon={faInstagram}
          onClick={() =>
            window.open("https://www.instagram.com/chefness024/?hl=en")
          }
        />
      </div>
    </div>
  );
}

export default Contact;
