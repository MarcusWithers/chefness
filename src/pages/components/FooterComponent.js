import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Chefness from "../../images/chefness.jpg";

const FooterComponent = () => {
  return (
    <div>
      <div className="footer pt-5 pb-5">
        <FontAwesomeIcon
          className=" fa-3x icon"
          icon={faInstagram}
          onClick={() =>
            window.open("https://www.instagram.com/chefness024/?hl=en")
          }
        />
      </div>
      <div className="footer_footer pt-5 pb-5 ">
        <img src={Chefness} alt="Cookies by Chefness " />
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
};

export default FooterComponent;
