import React from "react";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SixPack from "../images/6pack.jpg";
import TwelvePack from "../images/12pack.jpg";
import BananaBread from "../images/bananabread.jpg";
import BananaBreadSmall from "../images/banana_bread_small.jpg";
import Brownies from "../images/brownies_cropped.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import Burger from "../components/Burger";
import "../styles/styles.css";
import MenuCarousel from "../components/MenuCarousel";
import Button from "react-bootstrap/Button";
import FooterComponent from "../pages/components/FooterComponent";

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
            <Dropdown.Item>Cinnamon Roll</Dropdown.Item>
            <Dropdown.Item>Cosmic Brownie</Dropdown.Item>
            <Dropdown.Item>Mint Chocolate Chip</Dropdown.Item>
            <Dropdown.Item>Nutella Peanut Butter</Dropdown.Item>
            <Dropdown.Item>Banana Split</Dropdown.Item>
            <Dropdown.Item>Twix</Dropdown.Item>
            <Dropdown.Item>Fudge Brownie</Dropdown.Item>
            <Dropdown.Item>Oreo Brownie</Dropdown.Item>
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
            <img className="menu_item" src={Brownies} />
            <p className="pt-4">6 Pack</p>
            <p>
              <em>Up to two types of brownies</em>
            </p>
            <p>$17.99</p>
          </Col>
        </Row>
        <Row>
          <Col className="col-xl-6 col-lg-6 col-sm-6 col-md-6 img-fluid rounded">
            <img className="menu_item" src={BananaBreadSmall} />
            <p className="pt-4"> Small Banana Bread Loaf</p>
            <p>
              <em>$1.99 for chocolate chips or nuts</em>{" "}
            </p>
            <p>$11.99</p>
          </Col>
          <Col className="col-xl-6 col-lg-6 col-sm-6 col-md-6 img-fluid rounded">
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
      <FooterComponent />
    </div>
  );
}

export default Menu;
