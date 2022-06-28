import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookie1 from "../images/cookie1.jpg";
import Chefness from "../images/chefness.jpg";
import HeaderCookie from "../images/headercookie.png";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";
import Burger from "../components/Burger";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const navigateToMenu = () => {
    navigate("/Menu");
  };
  return (
    <>
      <Burger />
      <div className="bg container-fluid g-0 text-center pt-5">
        <h1>
          <strong>
            Best <em>Homemade</em> Cookies in Richfield, Minnesota!
          </strong>
        </h1>
        <h5 className="pt-2">
          Try My S'mores Cookie, You Definitely Won't Regret It!
        </h5>
        <div className="pt-5 pb-5">
          <Button variant="outline-danger" size="lg" onClick={navigateToMenu}>
            Menu
          </Button>
        </div>
        <img
          className="img img-fluid rounded"
          src={Cookie1}
          width="600px"
          height="600px"
        />
        <div className=" Aboutme pt-5">
          <div className="aboutme_header border-top border-bottom pt-5 pb-5">
            <strong className="header_text">About Me</strong>
          </div>

          <Row className="border-bottom pt-5 pb-5">
            <Col xs={2}>
              <strong>About me</strong>
            </Col>
            <Col className="px-5">
              Hi! I'm Janessa and I'm 19 years old. I started my cookie business
              in 2020 during quarantine and have been creating cookies ever
              since! I definitely recommend the s'mores cookie, it has been on
              the menu since I started and it's definitely a customer favorite!
              😄 I appreciate all of the continuous support since I started this
              journey and I look forward to many more years of baking! 🍪
            </Col>
          </Row>
        </div>

        <div className="pt-5 pb-5 border-top">
          <h2 className="pb-5">
            <strong>Here's some of my cookies!</strong>
          </h2>
          <Carousel />
        </div>
        <div className="contact pt-5  ">
          <div className="contact_header border-top border-bottom pt-5 pb-5 ">
            <strong className="header_text">Contact</strong>
          </div>
          <div className="contact_info border-bottom d-flex flex-column align-items-center ">
            <div className=" pb-5 pt-5  ">
              <Row>
                <Col className="pt-5 mt-5 ">
                  <img className="img-fluid rounded" src={Chefness} />
                </Col>
                <Col className="pt-5 mt-5  ">
                  <h2>Chefness</h2>
                  <h2>
                    <b>612-296-1993</b>
                  </h2>
                  <p>Available Throughout the week</p>
                  <p className="pt-3 ">
                    Feel free to contact me whenever for any questions regarding
                    purchases
                  </p>
                  <Link to="/Contact">
                    <Button variant="outline-danger" size="md">
                      Contact Me
                    </Button>
                  </Link>
                  <br />
                </Col>
              </Row>
            </div>
          </div>
          <div className="footer pt-5 pb-5">
            <FontAwesomeIcon
              className="me-4 fa-3x icon"
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
    </>
  );
}

export default Home;
