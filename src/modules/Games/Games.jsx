import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HomeLaptop } from "../../assets";
import GameCard from "./GameCard";

const Games = () => {
  return (
    <Container>
      <GameCard
        gameThumbnail="https://static.gala.games/images/games/the-walking-dead/TWDE_game_image_title_banner.png"
        gameTitle="The Walking Dead: Empires"
        genre="Survival MMORPG"
        developer="Ember Entertainment"
        status="In Development"
        platform="PC"
      />
      <GameCard
        gameThumbnail="https://static.gala.games/images/mirandus/mirandus_game_image_boats_docks.png"
        gameTitle="Mirandus"
        luncherLink="yes"
        genre="Fantasy RPG"
        developer="Track Games"
        status="In Development"
        platform="Mac/PC"
      />
      <GameCard
        gameThumbnail="https://static.gala.games/images/games/legacy/Title_Banner-01.png"
        gameTitle="Legacy"
        genre="Business Sim"
        developer="22cans"
        status="In Development"
        platform="PC/MAC"
      />
      <GameCard
        gameThumbnail="https://static.gala.games/images/games/last-expedition/game-title-banner.jpg"
        gameTitle="Last Expedition"
        genre="Survival FPS"
        developer="Certain Affinity"
        status="Pending Node Vote"
        platform="PC"
      />
      <GameCard
        gameThumbnail="https://static.gala.games/images/echoes-of-empire/eoe_game_page_title.png"
        gameTitle="Echoes of Empire"
        genre="Strategy, 4X"
        developer="Ion Games"
        status="Pending Node Vote"
        platform="PC"
      />
      <GameCard
        gameThumbnail="https://static.gala.games/images/spider-tanks/st_gamebanner.png"
        gameTitle="Spider Tanks"
        genre="PvP Brawler"
        developer="GAMEDIA"
        status="Beta"
        platform="PC"
        luncherLink="yes"
      />
      <GameCard
        gameThumbnail="https://static.gala.games/images/banners/tsp2e_game.jpg"
        gameTitle="Town Star"
        genre="Simulation"
        developer="Track Games"
        status="Beta"
        platform="Browser"
        gameLink="yes"
      />
      <h2 className="my-5 border-bottom">Get a Track Node Today</h2>
      <Row className="game-card bg-secondary rounded text-white py-4">
        <Col className="game-thumbnail" md={6}>
          <img src={HomeLaptop} alt="Track token" className="d-block w-100" style={{ maxWidth: "450px" }} />
        </Col>
        <Col className="d-flex flex-column" md={6}>
          <p className="my-2">
            The Track Network is supported by users, just like you, who operate Track Nodes from their home computers.
            By buying a license to operate a Track Node, you open up opportunities to receive rewards for your
            contribution to the network. This can include Track, limited edition NFTs, and opportunities to help the
            Track Games ecosystem grow.
          </p>
          <Link to="/buy" className="btn btn-primary btn-lg w-100 my-auto">
            Buy Now
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Games;
