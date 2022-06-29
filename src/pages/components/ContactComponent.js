import React from "react";
import { useNavigate } from "react-router-dom";
import Chefness from "../../images/chefness.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ContactComponent = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/Contact");
  };

  return (
    <div>
      <div className="contact pt-5  ">
        <div className="contact_header border-top border-bottom pt-5 pb-5 ">
          <strong className="header_text">Contact</strong>
        </div>
        <div className="contact_info border-bottom d-flex flex-column align-items-center px-3">
          <div className=" pb-5 pt-5  ">
            <Row>
              <Col className="pt-5 mt-5 ">
                <img
                  className="chefness_header img-fluid rounded image"
                  src={Chefness}
                />
              </Col>
              <Col className="pt-5 mt-5  ">
                <h2 className="pt-4">Chefness</h2>
                <h2>
                  <b>612-296-1993</b>
                </h2>
                <p className="pt-2 ">
                  Available <br />
                  <b>Monday - Friday</b>
                </p>
                <p className="pt-3 ">
                  Feel free to contact me whenever for any questions regarding
                  purchases
                </p>
                <div className=" pb-5">
                  <Button
                    variant="outline-danger"
                    size="lg"
                    onClick={navigateToContact}
                  >
                    Contact
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
