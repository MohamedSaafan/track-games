import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaDiscord } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiHelpCircle, BiInfoCircle } from "react-icons/bi";
import { RiHandCoinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white text-lg-start footer mt-auto">
      <Container className="p-4">
        <Row>
          <Col>
            <h5 className="text-uppercase d-flex align-items-center mb-4">
              <BiHelpCircle className="me-1" />
              help
            </h5>

            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/faq" className="text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#!" className="text-white">
                  Contact Support
                </Link>
              </li>
            </ul>
          </Col>

          <Col>
            <h5 className="text-uppercase d-flex align-items-center mb-4">
              <BiInfoCircle className="me-1" /> About
            </h5>

            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#!" className="text-white">
                  News
                </Link>
              </li>
              <li>
                <Link to="#!" className="text-white">
                  Environmental Impact
                </Link>
              </li>
            </ul>
          </Col>

          <Col>
            <h5 className="text-uppercase text-uppercase d-flex align-items-center mb-4">
              <RiHandCoinLine className="me-1" />
              track COIN
            </h5>

            <ul className="list-unstyled">
              <li>
                <Link to="#!" className="text-white">
                  get TRACK
                </Link>
              </li>
              <li>
                <Link to="#!" className="text-white">
                  Smart Contract
                </Link>
              </li>
            </ul>
          </Col>

          <Col>
            <h5 className="text-uppercase">join our community</h5>

            <ul className="list-unstyled d-flex gap-2 mt-3">
              <li>
                <a href="https://www.facebokc.com" target="_blank" rel="noreferrer" className="text-white">
                  <BsTwitter className="footer-icon" />
                </a>
              </li>
              <li>
                <a href="www.facebokc.com" target="_blank" className="text-white">
                  <FaFacebookF className="footer-icon" />
                </a>
              </li>
              <li>
                <a href="www.facebokc.com" target="_blank" className="text-white">
                  <FaYoutube className="footer-icon" />
                </a>
              </li>
              <li>
                <a href="www.facebokc.com" target="_blank" className="text-white">
                  <FaDiscord className="footer-icon" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2021
        <p className="text-white ms-2 d-inline-block">Track Games</p>
        <Link className="text-white mx-2" to="/terms-and-conditions">
          • Terms and Conditions
        </Link>
        <Link className="text-white mx-2" to="/privacy-policy">
          • Privacy Policy
        </Link>
        <Link className="text-white mx-2" to="/launcher-eula">
          • Launcher EULA
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
