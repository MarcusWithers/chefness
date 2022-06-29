import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutmeComponent = () => {
  return (
    <div>
      <div className=" Aboutme pt-5">
        <div className="aboutme_header border-top border-bottom pt-5 pb-5">
          <strong className="header_text">About Me</strong>
        </div>
        <Row className="border-bottom pt-5 pb-5 aboutme_info">
          <Col className="px-5">
            Hi! I'm Janessa and I'm 19 years old. I started my cookie business
            in 2020 during quarantine and have been creating cookies ever since!
            I definitely recommend the s'mores cookie, it has been on the menu
            since I started and it's definitely a customer favorite! 😄 I
            appreciate all of the continuous support since I started this
            journey and I look forward to many more years of baking! 🍪
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutmeComponent;
