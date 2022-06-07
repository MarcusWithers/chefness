import React from "react";
import Burger from "../components/Burger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";
function ErrorPage() {
  return (
    <div className="container text-center">
      <Burger />
      <h4>We couldn't find the webpage that you're looking for.</h4>
      <h4>
        {" "}
        This is possibly because you entered an incorrect URL into the web
        browser.
      </h4>
      <h4>Or the page no longer exists</h4>
      <p>Try going back to the homepage and double check the url</p>
    </div>
  );
}

export default ErrorPage;
