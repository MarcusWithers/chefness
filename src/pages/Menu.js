import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cookie from "../images/cookie.png";
import SixPack from "../images/6pack.jpg";
import TwelvePack from "../images/12pack.jpg";
import BananaBread from "../images/bananabread.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";

function Menu() {
  return (
    <div className="bg container text-center pt-5">
      <div className="heading pt-5 pb-5">
        <h1>Menu</h1>
      </div>
      <div className="pt-5 pb-5 ">
        <Row>
          <Col className="col-xl-4 col-lg-4 col-sm-6 col-md-4 img-fluid rounded">
            <img src={SixPack} width="300rem" />
            <p>6 Pack</p>
            <p>$11.99</p>
          </Col>
          <Col className="col-xl-4 col-lg-4 col-sm-6 col-md-4 img-fluid rounded">
            <img src={TwelvePack} width="300rem" />
            <p>12 Pack</p>
            <p>$19.99</p>
          </Col>
          <Col className="col-xl-4 col-lg-4 col-sm-6 col-md-4 img-fluid rounded">
            <img src={BananaBread} width="300rem" />
            <p>Banana Bread Loaf</p>
            <p>$11.99 + $1.99 for chocolate chips or nuts</p>
          </Col>
        </Row>
      </div>
      <div className="footer pt-5 pb-5">
        <FontAwesomeIcon className="me-4 fa-3x icon " icon={faInstagram} />
        <FontAwesomeIcon className="me-4 fa-3x  icon" icon={faEnvelope} />
      </div>
    </div>
  );
}

export default Menu;
