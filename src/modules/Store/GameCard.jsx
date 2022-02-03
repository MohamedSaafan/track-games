import { Card } from "react-bootstrap";
import { FaEthereum } from "react-icons/fa";

const GameCard = ({ cardImage, cardTitle }) => {
  return (
    <Card>
      <Card.Img variant="top" src={cardImage} height={350} style={{ objectFit: "contain" }} />
      <Card.Body>
        <Card.Title className="font-md">{cardTitle}</Card.Title>
        <div className="game-price-section font-sm mt-3">
          <span className="text-muted font-sm">Price</span>
          <div className="game-price">
            <span className="d-flex align-items-center gap-2">
              <FaEthereum className="ethereum-icon ethereum-icon-sm" /> 333 ETH
            </span>
            <span className="text-muted">= $ 181,1917.90</span>
          </div>
        </div>
        <span className="text-muted font-sm">Game Name</span>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
