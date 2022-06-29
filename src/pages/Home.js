import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../components/Carousel";
import Cookie1 from "../images/cookie1.jpg";
import Button from "react-bootstrap/Button";
import Burger from "../components/Burger";
import FooterComponent from "../pages/components/FooterComponent";
import ContactComponent from "../pages/components/ContactComponent";
import AboutmeComponent from "./components/AboutmeComponent";

function Home() {
  const navigate = useNavigate();

  const navigateToMenu = () => {
    navigate("/Menu");
  };
  return (
    <>
      <div className="bg container-fluid g-0 text-center  ">
        <Burger />
        <h1 className="pt-5 px-3">
          <strong>
            Best <em>Homemade</em> Cookies in Richfield, Minnesota!
          </strong>
        </h1>
        <h5 className="pt-2 px-3">
          Try My S'mores Cookie, You Definitely Won't Regret It! 😋
        </h5>
        <div className="pt-5 pb-5">
          <Button variant="outline-danger" size="lg" onClick={navigateToMenu}>
            Menu
          </Button>
        </div>
        <img
          className="img-fluid rounded px-3"
          src={Cookie1}
          height="600px"
          width="600px"
          alt="Cookies by Chefness "
        />
        <AboutmeComponent />
        <div className="px-3">
          <Carousel />
        </div>
        <ContactComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default Home;
