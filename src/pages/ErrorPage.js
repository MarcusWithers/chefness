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
      We couldn't find the webpage that you're looking for.
      <ul>
        <li>
          This is possibly because you entered an incorrect URL into the web
          browser.
        </li>
        <li>The page no longer exists</li>
      </ul>
      <p>Try going back to the homepage and double check the url</p>
    </div>
  );
}

export default ErrorPage;
