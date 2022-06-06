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

function Home() {
  const navigate = useNavigate();

  const navigateToMenu = () => {
    navigate("/Menu");
  };
  return (
    <>
      <div className="bg container-fluid text-center pt-5">
        <h1>
          Best <em>Homemade</em> Cookies in Richfield!
        </h1>
        <h5 className="pt-2">
          Try My S'mores Cookie, You Definitely Won't Regret It!
        </h5>
        <div className="pt-5 pb-5">
          <Button className=" btn-secondary" size="lg" onClick={navigateToMenu}>
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
            <Col>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Col>
          </Row>
          <Row className="pt-5 pb-5 ">
            <Col xs={2}>
              <strong>About me</strong>
            </Col>
            <Col>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Col>
          </Row>
        </div>

        <div className="pt-5 pb-5 border-top">
          <h2 className="pb-5">Here's some of my cookies!</h2>
          <Carousel />
        </div>
        <div className="contact pt-5">
          <div className="contact_header border-top border-bottom pt-5 pb-5">
            <strong className="header_text">Contact</strong>
          </div>
          <div className="border-bottom ">
            <div className="d-flex justify-content-center align-items-center pb-5 pt-5">
              <Row>
                <Col className="pt-5 mt-5">
                  <img className="img-fluid rounded" src={Chefness} />
                </Col>
                <Col>
                  <h2>Janessa Withers</h2>
                  <h2>xxx-xxx-xxxx</h2>
                  <p>Available During These Days</p>
                  <p>Sunday</p>
                  <p>Monday</p>
                  <p>Tuesday</p>
                  <p>Wednesday</p>
                  <p>Thursday</p>
                  <p>Friday</p>
                  <p>Saturday</p>
                  <br />
                  <p>
                    Feel free to contact me whenever for any questions regarding
                    purchases
                  </p>
                  <Button>Contact Me</Button>
                </Col>
              </Row>
            </div>
            <div className="footer pt-5 pb-5">
              <FontAwesomeIcon
                className="me-4 fa-3x icon"
                icon={faInstagram}
                onClick={() =>
                  window.open("https://www.instagram.com/chefness024/?hl=en")
                }
              />
              <FontAwesomeIcon
                className="me-4 fa-3x icon"
                icon={faEnvelope}
                onClick={() =>
                  window.open("mailto:cookiesbychefness24@gmail.com")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
