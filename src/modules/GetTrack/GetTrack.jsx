import { Container, Row, Col, Button } from "react-bootstrap";
import {
  BinanceLogo,
  GateioLogo,
  GetTrackImage,
  IconExchange,
  IconGetNode,
  KucoinLogo,
  NodeCommunity,
  NodeEcosystem,
  OkexLogo,
  UniswapLogo,
} from "../../assets/index";
import ExchangeCard from "./ExchangeCard";

const GetTrack = () => {
  return (
    <>
      <section className="getTrack-hero">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className="d-flex justify-content-center flex-column">
              <h2 className="fw-bold display-4 mb-4">Get Track</h2>
              <p>
                There are many ways to get and use Track within the Track Games ecosystem. The central focus of Track
                Games is…well…GAMES. However, we do know that people want to know how to get Track to use in-game and to
                purchase items.
              </p>
            </Col>
            <Col md={4}>
              <img src={GetTrackImage} className="getTrack-banner" alt="Track Game" />
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="mt-5">
        <div className="justify-content-center">
          <h2 className="font-lg fw-bold mb-4">Two Ways to Get TRACK</h2>

          <div className="bg-secondary px-5 py-3 rounded">
            <Row className="d-flex align-items-center">
              <Col md={3}>
                <img className="track-icon" src={IconGetNode} alt="getNode icon" />
              </Col>
              <Col md={6}>
                <div className="getTrack-cardBody">
                  <div className="getTrack-text text-white">
                    <h3 className="fw-bold">Buy From an Exchange</h3>
                    <p>We are currently listed for purchase on the following exchanges:</p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <Button variant="outline-primary" className="font-lg getTrack-button">
                  Get a Node
                </Button>
              </Col>
            </Row>
          </div>
          <div className="bg-secondary px-5 py-3 rounded mt-3">
            <Row className="d-flex align-items-center">
              <Col md={3}>
                <img className="track-icon" src={IconExchange} alt="Exchange icon" />
              </Col>
              <Col md={9}>
                <div className="getTrack-cardBody">
                  <div className="getTrack-text text-white">
                    <h3 className="fw-bold">Buy From an Exchange</h3>
                    <p>We are currently listed for purchase on the following exchanges:</p>
                  </div>
                </div>
              </Col>
              <ExchangeCard platformImg={BinanceLogo} name="Binance" slug="TRACK/BNB" />
              <ExchangeCard platformImg={OkexLogo} name="Okex" slug="TRACK/USDT" />
              <ExchangeCard platformImg={KucoinLogo} name="Kucoin" slug="TRACKX/USDT" />
              <ExchangeCard platformImg={GateioLogo} name="Kucoin" slug="TRACK/USDT" />
              <ExchangeCard platformImg={UniswapLogo} name="Uniswap" slug="TRACK/ETH" />
            </Row>
          </div>
        </div>
        <Row className="mt-5 justify-content-evenly gap-2">
          <Col md={5}>
            <h2 className="font-lg fw-bold">Smart Contract</h2>
            <div className="bg-secondary d-flex gap-4 align-items-center text-white p-3 rounded">
              <svg
                viewBox="0 0 100 100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="hexagon"
                style={{ height: "12vw", width: "12vw", minHeight: "80px", minWidth: "80px" }}
              >
                <defs>
                  <linearGradient id="gradient-get-track-smart-contract" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="20%" style={{ stopColor: "rgb(40, 222, 247)", stopOpacity: "1" }}></stop>
                    <stop offset="100%" style={{ stopColor: " rgb(19, 124, 223)", stopOpacity: "1" }}></stop>
                  </linearGradient>
                  <pattern
                    id="background-get-track-smart-contract"
                    patternUnits="userSpaceOnUse"
                    patternContentUnits="userSpaceOnUse"
                    width="100"
                    height="100"
                  >
                    <rect width="100" height="100" fill="url(#gradient-get-track-smart-contract"></rect>
                    <image href={NodeEcosystem} width="60" height="60" y="20" x="20"></image>
                  </pattern>
                </defs>
                <polygon
                  points="50 1 95 25 95 75 50 99 5 75 5 25"
                  fill="url(#background-get-track-smart-contract)"
                  className="hex-poly"
                ></polygon>
              </svg>
              <div className="minCard-Content">
                <p>Want to learn more about the track Token?</p>
                <Button className="w-100">View Smart Contract</Button>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <h2 className="font-lg fw-bold">Decentralization</h2>
            <div className="bg-secondary d-flex gap-4 align-items-center text-white p-3 rounded">
              <svg
                viewBox="0 0 100 100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="hexagon"
                style={{ height: "12vw", width: "12vw", minHeight: "80px", minWidth: "80px" }}
              >
                <defs>
                  <linearGradient id="gradient-node-community" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="20%" style={{ stopColor: "rgb(40, 222, 247)", stopOpacity: "1" }}></stop>{" "}
                    <stop offset="100%" style={{ stopColor: "rgb(19, 124, 223)", stopOpacity: "1" }}></stop>
                  </linearGradient>
                  <pattern
                    id="background-node-community"
                    patternUnits="userSpaceOnUse"
                    patternContentUnits="userSpaceOnUse"
                    width="100"
                    height="100"
                  >
                    <rect width="100" height="100" fill="url(#gradient-node-community"></rect>{" "}
                    <image href={NodeCommunity} width="60" height="60" y="20" x="20"></image>
                  </pattern>
                </defs>
                <polygon
                  points="50 1 95 25 95 75 50 99 5 75 5 25"
                  fill="url(#background-node-community)"
                  className="hex-poly"
                ></polygon>
              </svg>
              <div className="minCard-Content">
                <p>Decentralization</p>
                <Button className="w-100">Read More</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GetTrack;
