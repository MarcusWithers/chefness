import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import Burger from "../components/Burger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Chefness from "../images/chefness.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <div className="contact pt-5  ">
        <div className="contact_header border-top border-bottom pt-5 pb-5 ">
          <strong className="header_text">Contact</strong>
        </div>
        <div className="contact_info border-bottom d-flex flex-column align-items-center px-3">
          <div className=" pb-5 pt-5  ">
            <Row>
              <Col className="pt-5 mt-5 ">
                <img className="img-fluid rounded image" src={Chefness} />
              </Col>
              <Col className="pt-5 mt-5  ">
                <h2 className="pt-4">Chefness</h2>
                <h2>
                  <b>612-296-1993</b>
                </h2>
                <p className="pt-2 ">
                  Available <br />
                  <b>Monday - Friday</b>
                </p>
                <p className="pt-3 ">
                  Feel free to contact me whenever for any questions regarding
                  purchases
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="footer pt-5 pb-5 g-0">
          <FontAwesomeIcon
            className=" fa-3x icon"
            icon={faInstagram}
            onClick={() =>
              window.open("https://www.instagram.com/chefness024/?hl=en")
            }
          />
        </div>
        <div className="footer_footer pt-5 pb-5 ">
          <img src={Chefness} />
          <p className="pt-5">Chefness | Richfield, MN 55423</p>
          <p>
            <b> 📞612-296-1993</b> |{" "}
            <FontAwesomeIcon
              className=" fa-1x icon insta_footer"
              icon={faInstagram}
              onClick={() =>
                window.open("https://www.instagram.com/chefness024/?hl=en")
              }
            />
            chefness024
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
