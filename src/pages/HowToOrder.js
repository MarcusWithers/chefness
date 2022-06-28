import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import Burger from "../components/Burger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Chefness from "../images/chefness.jpg";
import Button from "react-bootstrap/Button";

function HowToOrder() {
  const navigate = useNavigate();

  const navigateToMenu = () => {
    navigate("/Menu");
  };

  return (
    <div className="container-fluid text-center g-0">
      <Burger />
      <h1 className="pt-5 pb-5">How To Order!</h1>
      <div className="pb-5 px-3">
        <Button variant="outline-danger" size="lg" onClick={navigateToMenu}>
          Menu
        </Button>
      </div>
      <h3 className="pb-5 px-3">
        Below is what to include in your DM (No online orders)
      </h3>

      <p className="pb-3 px-3 ">
        What your order is along with what type of cookies/brownies you'd like.
      </p>
      <p className="pb-3 px-3">
        <strong>
          <em>Be sure to check the menu to choose what cookies you'd like!</em>
        </strong>
      </p>
      <p className="pb-3 px-3">
        How you will be paying (Cash App or Venmo - These are currently the only
        ways to pay)
      </p>
      <p className="pb-3 px-3">
        What day you will be ordering, if you're ordering in advance
      </p>
      <p className="pb-3 px-3">
        <strong>Allergies!?</strong> Please let me know so I can ensure extra
        sanitary precautions when making your order
      </p>
      <div>
        <h2 className="pt-5 pb-5 px-3">Payment Methods:</h2>
        <h4>Venmo: @Janessa-Withers</h4>
        <h4>Cash App: $JanessaWithers024</h4>
      </div>
      <div className="pt-5 px-3">
        <h2 className="pb-5 px-3">Important Info:</h2>
        <p className="px-3">
          Full payment is <strong>required</strong> when placing your order
        </p>
        <p className="px-3">
          No deliveries, pick up <strong>only</strong>
        </p>
        <p className="px-3">Menu changes every season</p>
        <p className="px-3">
          Please respect my <em>time</em> and my <em>money</em> and try not to
          be late for any pickups!
        </p>
        <p className="px-3">
          I typically announce on my story the day before I am making orders,
          but if you have a specific date in mind then please let me know at
          least a week in advance.
        </p>
      </div>

      <div>
        <h2 className="pt-5 pb-5 px-3">Prices:</h2>
        <h4 className="px-3">
          6 pack of cookies: $13.99 (Up to two types of cookies)
        </h4>
        <h4 className="pb-5 px-3">
          12 pack of cookies: $21.99 (Up to three types of cookies)
        </h4>
        <h4 className="px-3">
          3 Pack of brownies: $8.99 (One type of brownie)
        </h4>
        <h4 className="pb-5 px-3">
          6 Pack of brownies: $17.99 (Up to two types of brownies)
        </h4>
        <h4 className="px-3">
          Small Banana bread loaf: $11.99 + ($1.99 for additional chocolate
          chips or nuts)
        </h4>
        <h4 className="pb-5 px-3">
          Large Banana bread loaf: $14.99 + ($1.99 for additional chocolate
          chips or nuts)
        </h4>
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
  );
}

export default HowToOrder;
