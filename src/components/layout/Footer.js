import React from "react";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import Heading from "../common/Heading";
import logo from "../../images/logo.svg";

function Footer() {
  return (
    <>
      <footer className="mt-auto">
        <Row xs={1} md={4} lg={4}>
          <Col>
            <img className="logo" src={logo} alt="Logo" />
            <ul className="list-unstyled">
              <li>
                <a href=".">About This Site</a>
              </li>
              <li>
                <a href=".">Trade/Press</a>
              </li>
              <li>
                <a href=".">Sitemap</a>
              </li>
            </ul>
          </Col>
          <Col>
            <Heading size="5" content="Visitor information" />
            <ul className="list-unstyled">
              <li>
                <a href=".">Explore Bergen</a>
              </li>
              <li>
                <a href=".">Travel Information</a>
              </li>
              <li>
                <a href=".">Attractions</a>
              </li>
              <li>
                <a href=".">Event Venues</a>
              </li>
            </ul>
          </Col>
          <Col>
            <Heading size="5" content="About Us" />
            <ul className="list-unstyled">
              <li>
                <a href=".">About Us</a>
              </li>
              <li>
                <a href=".">Reviews</a>
              </li>
              <li>
                <a href=".">Investors</a>
              </li>
              <li>
                <a href=".">Careers</a>
              </li>
            </ul>
          </Col>
          <Col>
            <Heading size="5" content="Support" />
            <ul className="list-unstyled">
              <li>
                <a href="./Contact">Contact</a>
              </li>
              <li>
                <a href=".">Cancellation Options</a>
              </li>
              <li>
                <a href=".">FAQ</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer__bottom text-sm-center text-md-left">
          <Row xs={1} md={2} lg={2} className="align-items-center">
            <Col className="footer__bottom__terms">
              <span>© 2021 Holidaze</span>
              <span className="footer__bottom__dots">·</span>
              <a href=".">Privacy</a>
              <span className="footer__bottom__dots">·</span>
              <a href=".">Terms & Conditions</a>
            </Col>
            <Col className="footer__bottom__social-media">
              <a href=".">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href=".">
                <i className="fab fa-twitter"></i>
              </a>
              <a href=".">
                <i className="fab fa-instagram"></i>
              </a>
            </Col>
          </Row>
          <span></span>
        </div>
      </footer>
    </>
  );
}

export default Footer;