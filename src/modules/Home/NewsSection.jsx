import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { NewsBanner2, NewsBanner1 } from "../../assets";
import NewsCard from "./NewsCard";

const NewsSection = () => {
  return (
    <section className="my-4">
      <div className="mb-4 pb-2 d-flex justify-content-between align-items-center border-bottom">
        <h2 className="text-capitalize font-lg text-secondary">news</h2>
        <Link to="/" className="text-pramiry text-uppercase font-lg">
          view all
        </Link>
      </div>
      <Row>
        <Col className="p-4" md={4}>
          <NewsCard
            cardImage={NewsBanner1}
            cardTitle="Founder's Node Proposal - Two New Gaming Titles"
            cardText="Founder's Node Proposal — Two New Gaming Titles Well, this is a little awkward. We're preparing to reveal and
          open presale for two incredibly..."
            cardLink="/blog"
            cardLinkAnchor="Read more..."
          />
        </Col>
        <Col className="p-4" md={4}>
          <NewsCard
            cardImage={NewsBanner2}
            cardTitle="Founder's Node Proposal - Two New Gaming Titles"
            cardText="Founder's Node Proposal — Two New Gaming Titles Well, this is a little awkward. We're preparing to reveal and
          open presale for two incredibly..."
            cardLink="/blog"
            cardLinkAnchor="Read more..."
          />
        </Col>
        <Col className="p-4" md={4}>
          <NewsCard
            cardImage={NewsBanner1}
            cardTitle="Founder's Node Proposal - Two New Gaming Titles"
            cardText="Founder's Node Proposal — Two New Gaming Titles Well, this is a little awkward. We're preparing to reveal and
          open presale for two incredibly..."
            cardLink="/blog"
            cardLinkAnchor="Read more..."
          />
        </Col>
      </Row>
    </section>
  );
};

export default NewsSection;
