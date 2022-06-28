import React from "react";
import "../styles/styles.css";
import Burger from "../components/Burger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function HowToOrder() {
  return (
    <div className="container-fluid text-center g-0">
      <Burger />
      <h1 className="pt-5 pb-5">How To Order!</h1>
      <h3 className="pb-5">
        Below is what to include in your DM (I'm not currently doing online
        orders)
      </h3>

      <p className="pb-3">
        What cookies you want/how many of each (For 12 packs of cookies you can
        choose 3 different types of cookies. For 6 packs of cookies you can
        choose 2)
      </p>
      <p className="pb-3">
        <strong>
          <em>Be sure to check the menu to choose what cookies you'd like!</em>
        </strong>
      </p>
      <p className="pb-3">
        How you will be paying (Cash App or Venmo - These are currently the only
        ways to pay)
      </p>
      <p className="pb-3">
        What day you will be ordering, if you're ordering in advance
      </p>
      <p className="pb-3">
        <strong>Allergies!?</strong> Please let me know so I can ensure extra
        sanitary precautions when making your order
      </p>
      <div>
        <h2 className="pt-5 pb-5">Payment Methods:</h2>
        <h4>Venmo: @Janessa-Withers</h4>
        <h4>Cash App: $JanessaWithers024</h4>
      </div>
      <div className="pt-5">
        <h2 className="pb-5">Important Info:</h2>
        <p>
          Full payment is <strong>required</strong> when placing your order
        </p>
        <p>
          No deliveries, pick up <strong>only</strong>
        </p>
        <p>Menu changes every season</p>
        <p>
          Please respect my <em>time</em> and my <em>money</em> and try not to
          be late for any pickups!
        </p>
        <p>
          I typically announce on my story the day before I am making orders,
          but if you have a specific date in mind then please let me know at
          least a week in advance.
        </p>
      </div>

      <div>
        <h2 className="pt-5 pb-5">Prices:</h2>
        <h4>6 pack of cookies: $13.99 (Up to two types of cookies)</h4>
        <h4>12 pack of cookies: $21.99 (Up to three types of cookies)</h4>
        <h2 className="pt-5 pb-5">Other Items:</h2>
        <h4 className="pb-5">
          Banana bread loaf: $11.99 + ($1.99 for additional chocolate chips or
          nuts)
        </h4>
      </div>
      <div className="footer pt-5 pb-5 g-0">
        <FontAwesomeIcon
          className="me-4 fa-3x icon"
          icon={faInstagram}
          onClick={() =>
            window.open("https://www.instagram.com/chefness024/?hl=en")
          }
        />
      </div>
    </div>
  );
}

export default HowToOrder;
