import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import Chefness from "../images/chefness.jpg";
import MenuCarousel from "../components/MenuCarousel";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "react-bootstrap/Button";

function Menu() {
  const navigate = useNavigate();

  const navigateToOrder = () => {
    navigate("/HowToOrder");
  };
  return (
    <div className="bg container-fluid text-center  g-0 ">
      <Burger />
      <div>
        <Dropdown className="dropdown pt-5 ">
          <Dropdown.Toggle
            variant="outline-danger"
            id="dropdown-basic"
            size="lg"
          >
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
          <Col className="col-xl-4 col-lg-4 col-sm-6 col-md-4 img-fluid rounded pb-5">
            <img className="menu_item" src={SixPack} />
            <p className="pt-4">6 Pack</p>
            <p>
              <em>Up to two types of cookies</em>
            </p>
            <p>$13.99</p>
          </Col>
          <Col className="col-xl-4 col-lg-4 col-sm-6 col-md-4 img-fluid rounded">
            <img className="menu_item" src={TwelvePack} />
            <p className="pt-4">12 Pack</p>
            <p>
              <em>Up to three types of cookies</em>
            </p>
            <p>$21.99</p>
          </Col>
          <Col className="col-xl-4 col-lg-4 col-sm-6 col-md-4 img-fluid rounded">
            <img className="menu_item" src={BananaBread} />
            <p className="pt-4"> Small Banana Bread Loaf</p>
            <p>
              <em>$1.99 for chocolate chips or nuts</em>{" "}
            </p>
            <p>$11.99</p>
          </Col>
        </Row>
        <Row>
          <Col className="col-xl-4 col-lg-4 col-sm-6 col-md-4 img-fluid rounded pb-5">
            <img className="menu_item" src={SixPack} />
            <p className="pt-4">3 Pack</p>
            <p>
              <em>Three of one kind </em>
            </p>
            <p>$8.99</p>
          </Col>
          <Col className="col-xl-4 col-lg-4 col-sm-6 col-md-4 img-fluid rounded">
            <img className="menu_item" src={TwelvePack} />
            <p className="pt-4">6 Pack</p>
            <p>
              <em>Up to two types of brownies</em>
            </p>
            <p>$17.99</p>
          </Col>
          <Col className="col-xl-4 col-lg-4 col-sm-6 col-md-4 img-fluid rounded">
            <img className="menu_item" src={BananaBread} />
            <p className="pt-4"> Large Banana Bread Loaf</p>
            <p>
              <em>$1.99 for chocolate chips or nuts</em>{" "}
            </p>
            <p>$14.99</p>
          </Col>
        </Row>
        <Row className="menu_carousel pt-5">
          <Col className="img-fluid rounded ">
            <MenuCarousel />
          </Col>
        </Row>
      </div>
      <div className="pt-5 pb-5">
        <Button variant="outline-danger" size="lg" onClick={navigateToOrder}>
          Order
        </Button>
      </div>
      <div className="footer pt-5 pb-5">
        <FontAwesomeIcon
          className="fa-3x icon "
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
  );
}

export default Menu;
