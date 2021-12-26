import { Card } from "react-bootstrap";
import { MainLogo } from "../../assets";

const GameCard = ({ cardImage, cardTitle, points }) => {
  return (
    <Card>
      <Card.Img variant="top" src={cardImage} />
      <Card.Body className="bg-secondary text-white">
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text className="font-xss">
          <img src={MainLogo} className="me-2" width={15} height={20} alt={cardTitle} />
          {points}
        </Card.Text>
        <Card.Text className="font-xss">Mirandus</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
