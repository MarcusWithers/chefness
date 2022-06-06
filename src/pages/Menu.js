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
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Burger from "../components/Burger";
import "../styles/styles.css";

function Menu() {
  return (
    <div className="bg container-fluid text-center  g-0 ">
      <div>
        <Dropdown className="dropdown pt-5 ">
          <Dropdown.Toggle variant="danger" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>S'Mores</Dropdown.Item>
            <Dropdown.Item>Muddy Buddy</Dropdown.Item>
            <Dropdown.Item>Caramel Pretzel</Dropdown.Item>
            <Dropdown.Item>Chocolate Chunk</Dropdown.Item>
            <Dropdown.Item>Cookies & Cream</Dropdown.Item>
            <Dropdown.Item>Salted Caramel</Dropdown.Item>
            <Dropdown.Item>Banana Bread</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className=" pt-5 pb-5 g-0">
        <h1>Pricing</h1>
      </div>

      <div className="pt-5 pb-5  ">
        <Row>
          <Col className="col-xl-4 col-lg-4 col-sm-6 col-md-6 img-fluid rounded">
            <img src={SixPack} width="300px" />
            <p className="pt-4">6 Pack</p>
            <p>
              <em>Up to two types of cookies</em>
            </p>
            <p>$11.99</p>
          </Col>
          <Col className="col-xl-4 col-lg-4 col-sm-6 col-md-6 img-fluid rounded">
            <img src={TwelvePack} width="300px" />
            <p className="pt-4">12 Pack</p>
            <p>
              <em>Up to three types of cookies</em>
            </p>
            <p>$19.99</p>
          </Col>
          <Col className="col-xl-4 col-lg-4 col-sm-6 col-md-6 img-fluid rounded">
            <img src={BananaBread} width="300px" />
            <p className="pt-4">Banana Bread Loaf</p>
            <p>
              <em>$1.99 for chocolate chips or nuts</em>{" "}
            </p>
            <p>$11.99</p>
          </Col>
        </Row>
      </div>
      <div className="footer pt-5 pb-5">
        <FontAwesomeIcon
          className="me-4 fa-3x icon "
          icon={faInstagram}
          onClick={() =>
            window.open("https://www.instagram.com/chefness024/?hl=en")
          }
        />
        <FontAwesomeIcon
          className="me-4 fa-3x  icon"
          icon={faEnvelope}
          onClick={() => window.open("mailto:cookiesbychefness24@gmail.com")}
        />
      </div>
    </div>
  );
}

export default Menu;
