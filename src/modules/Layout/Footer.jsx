import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainLogo } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white text-center text-lg-start">
      <Container className="p-4">
        <div className="mb-4">
          <img src={MainLogo} width={43} height={58} className="d-inline-block mr-2" alt="Track Game" />
          <p className="text-uppercase d-inline-block">track</p>
        </div>
        <Row>
          <Col className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">help</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <Link to="#!" className="text-white">
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

          <Col className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About</h5>

            <ul className="list-unstyled">
              <li>
                <Link to="#!" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#!" className="text-white">
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

          <Col className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">track COIN</h5>

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
        </Row>
      </Container>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2021
        <Link className="text-white" to="https://mdbootstrap.com/">
          Gala Games • Terms and Conditions • Privacy Policy • Launcher EULA
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
