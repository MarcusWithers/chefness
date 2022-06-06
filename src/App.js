import "./App.css";
import "./styles/styles.css";
import Carousel from "./components/Carousel";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookie from "./images/cookie.png";
import Chefness from "./images/chefness.jpg";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import HowToOrder from "./pages/HowToOrder";
import Menu from "./pages/Menu";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Router>
        <div className="container-fluid ">
          <nav className="navbar nav justify-content-center px-5 ">
            <Link className="nav_link" to="/">
              <strong>Home</strong>
            </Link>
            <Link className="nav_link" to="/Menu">
              <strong>Menu</strong>
            </Link>
            <Link className="" to="/">
              <img
                className="img-fluid
                rounded"
                src={Chefness}
                width="280px"
                height="280px"
              />
            </Link>
            <Link className="nav_link" to="/HowToOrder">
              <strong>Order</strong>
            </Link>
            <Link className="nav_link" to="/Contact">
              <strong>Contact</strong>
            </Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/HowToOrder" element={<HowToOrder />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
