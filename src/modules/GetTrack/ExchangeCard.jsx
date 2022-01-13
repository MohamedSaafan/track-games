import { Col } from "react-bootstrap";

const ExchangeCard = ({ platformImg, name, slug }) => {
  return (
    <Col md={12} className="exchange-card rounded mt-4">
      <img src={platformImg} alt={name} height={40} />
      <a href="/" className="border rounded text-white px-5 py-2">
        {slug}
      </a>
    </Col>
  );
};

export default ExchangeCard;
