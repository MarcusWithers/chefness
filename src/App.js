import "./App.css";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Chefness from "./images/chefness.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import HowToOrder from "./pages/HowToOrder";
import Menu from "./pages/Menu";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import ScrollToTop from "./utilities/ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="container-fluid g-0">
          <nav className="navbar nav justify-content-center px-5 ">
            <Link className="nav_link" to="/Home">
              <strong>Home</strong>
            </Link>
            <Link className="nav_link" to="/Menu">
              <strong>Menu</strong>
            </Link>
            <Link className="" to="/">
              <img
                className="chefness_header img-fluid
                rounded"
                src={Chefness}
                //width="280px"
                // height="280px"
                alt="Cookies by Chefness"
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
          <Route path="/Home" element={<Home />} />
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
