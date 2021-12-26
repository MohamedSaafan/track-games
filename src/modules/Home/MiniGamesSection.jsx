import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { GameBanner1, GameBanner2, GameBanner3, GameBanner4, GameBanner5 } from "../../assets";
import MiniGameCard from "./MiniGameCard";

const MiniGamesSection = () => {
  return (
    <section className="my-4">
      <div className="mb-4 pb-2 d-flex justify-content-between align-items-center border-bottom">
        <h2 className="text-capitalize font-lg text-secondary">games</h2>
        <Link to="/" className="text-pramiry text-uppercase font-lg">
          view all
        </Link>
      </div>
      <Row>
        <Col className="p-4">
          <MiniGameCard link="/games" imageSource={GameBanner1} imageAlt="Track game" />
        </Col>
        <Col className="p-4">
          <MiniGameCard link="/games" imageSource={GameBanner2} imageAlt="Track game" />
        </Col>
        <Col className="p-4">
          <MiniGameCard link="/games" imageSource={GameBanner3} imageAlt="Track game" />
        </Col>
        <Col className="p-4">
          <MiniGameCard link="/games" imageSource={GameBanner4} imageAlt="Track game" />
        </Col>
        <Col className="p-4">
          <MiniGameCard link="/games" imageSource={GameBanner5} imageAlt="Track game" />
        </Col>
      </Row>
    </section>
  );
};

export default MiniGamesSection;
