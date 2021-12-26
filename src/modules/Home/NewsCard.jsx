import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ cardImage, cardTitle, cardText, cardLink, cardLinkAnchor }) => {
  return (
    <Card>
      <Card.Img variant="top" src={cardImage} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text className="my-4">{cardText}</Card.Text>
        <Link className="btn btn-primary text-white text-center d-block mx-auto" to={cardLink}>
          {cardLinkAnchor}
        </Link>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
