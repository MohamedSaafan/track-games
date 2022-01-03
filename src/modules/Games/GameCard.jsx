import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillWindows } from "react-icons/ai";

const GameCard = ({ gameThumbnail, gameTitle, genre, developer, status, platform, luncherLink, gameLink }) => {
  return (
    <Row className="game-card bg-secondary rounded text-white py-4">
      <Col className="game-thumbnail" md={6}>
        <img src={gameThumbnail} alt={gameTitle} className="d-block w-100" />
      </Col>
      <Col className="game-info" md={6}>
        <Row className="game-infoInner">
          <Col md={12}>
            <h2 className="font-lg">{gameTitle}</h2>
          </Col>
          <Col md={6} sm={6}>
            <h3 className="fw-light text-uppercase font-sm">GENRE</h3>
            <p className="fw-bold text-capitalize">{genre}</p>
          </Col>
          <Col md={6} sm={6}>
            <h3 className="fw-light text-uppercase font-sm">DEVELOPER</h3>
            <p className="fw-bold text-capitalize">{developer}</p>
          </Col>
          <Col md={6} sm={6}>
            <h3 className="fw-light text-uppercase font-sm">DEVELOPMENT STATUS</h3>
            <p className="fw-bold text-capitalize">{status}</p>
          </Col>
          <Col md={6} sm={6}>
            <h3 className="fw-light text-uppercase font-sm">PLATFORM</h3>
            <p className="fw-bold text-capitalize">{platform}</p>
          </Col>
        </Row>
        <div className="game-trans mt-auto">
          <Link to="/game" className="btn btn-outline-primary text-uppercase visit-button d-block">
            visit store
          </Link>
          {luncherLink && (
            <a
              href={luncherLink}
              className="btn btn-info text-uppercase visit-button py-1 d-flex justify-content-between align-items-center"
            >
              Download Launcher <AiFillWindows className="ms-2" size={"2rem"} />
            </a>
          )}
          {gameLink && (
            <Link to="/game" className="btn btn-info text-uppercase visit-button">
              Play
            </Link>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default GameCard;
