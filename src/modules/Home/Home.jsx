import { Carousel, Container, Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoLogoDiscord } from "react-icons/io5";
import {
  HomeLaptop,
  MagicCard1,
  MagicCard2,
  MagicCard3,
  MagicCard4,
  MagicCard5,
  RobotImage1,
  RobotImage2,
  RobotImage3,
  SliderImage,
  GameBanner1,
  GameBanner2,
  GameBanner3,
  GameBanner4,
  GameBanner5,
  NewsBanner2,
  NewsBanner1,
} from "../../assets";
import GameCard from "./GameCard";

const Home = () => {
  return (
    <>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={SliderImage} alt="First slide" />
            <Carousel.Caption className="mb-2">
              <h3>VoxBlox as that is their game</h3>
              <p>Buy the Voxels and unlock the adventure</p>
              <Link to="/adventure" className="text-uppercase btn btn-primary text-white px-5 py-2">
                JOINE THE ADVENTURE
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={SliderImage} alt="Second slide" />

            <Carousel.Caption className="mb-2">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link to="/adventure" className="text-uppercase btn btn-primary text-white px-5 py-2">
                JOINE THE ADVENTURE
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={SliderImage} alt="Third slide" />

            <Carousel.Caption className="mb-2">
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              <Link to="/adventure" className="text-uppercase btn btn-primary text-white px-5 py-2">
                JOINE THE ADVENTURE
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <section className="bg-secondary my-4 rounded align-items-center justify-content-center py-4 px-5">
          <Row>
            <Col className="text-right" md={3} sm={2}>
              <IoLogoDiscord className="text-white hero-icon" />
            </Col>
            <Col md={9}>
              <h2 className="text-uppercase text-primary font-lg">join our community</h2>
              <div className="row mt-4">
                <p className="text-white col-md-6 font-sm mr-3">
                  Receive rewards like GALA, limited edition NFTs and help the Gala Games ecosystem grow.
                </p>
                <a
                  className=" col-md-6 align-self-center btn btn-primary font-sm btn-lg text-capitalize mx-auto text-white px-5"
                  href="https://discord.com/channels/@me"
                  style={{ maxWidth: "max-content" }}
                >
                  join discord
                </a>
              </div>
            </Col>
          </Row>
        </section>

        <section className="bg-secondary my-4 rounded align-items-center justify-content-center py-4 px-5">
          <Row>
            <Col className="text-right" md={3} sm={2}>
              <img src={HomeLaptop} alt="track node" />
            </Col>
            <Col md={9}>
              <h2 className="text-uppercase text-primary font-lg">get a track node</h2>
              <div className="row mt-4">
                <p className="text-white col-md-6 font-sm mr-3">
                  Receive rewards like GALA, limited edition NFTs and help the Gala Games ecosystem grow.
                </p>
                <a
                  className=" col-md-6 align-self-center btn btn-primary font-sm btn-lg text-capitalize mx-auto text-white px-5"
                  href="https://discord.com/channels/@me"
                  style={{ maxWidth: "max-content" }}
                >
                  learn more
                </a>
              </div>
            </Col>
          </Row>
        </section>

        <section className="my-4">
          <div className="mb-4 pb-2 d-flex justify-content-between align-items-center border-bottom">
            <h2 className="text-capitalize font-lg text-secondary">recent drops</h2>
            <Link to="/" className="text-pramiry text-uppercase font-lg">
              view all
            </Link>
          </div>
          <Row>
            <Col>
              <div className="my-4">
                <img src={MagicCard1} className="d-block" alt="magic card" />
              </div>
            </Col>
            <Col>
              <div className="my-4">
                <img src={MagicCard2} className="d-block" alt="magic card" />
              </div>
            </Col>
            <Col>
              <div className="my-4">
                <img src={MagicCard3} className="d-block" alt="magic card" />
              </div>
            </Col>
            <Col>
              <div className="my-4">
                <img src={MagicCard4} className="d-block" alt="magic card" />
              </div>
            </Col>
            <Col>
              <div className="my-4">
                <img src={MagicCard5} className="d-block" alt="magic card" />
              </div>
            </Col>
          </Row>
        </section>

        <section className="my-4">
          <div className="mb-4 pb-2 d-flex justify-content-between align-items-center border-bottom">
            <h2 className="text-capitalize font-lg text-secondary">top sellers</h2>
            <Link to="/" className="text-pramiry text-uppercase font-lg">
              view all
            </Link>
          </div>
          <Row>
            <Col>
              <GameCard cardImage={RobotImage1} cardTitle="Human Exemplar: The Pit Fighters" points={6104} />
            </Col>
            <Col>
              <GameCard cardImage={RobotImage2} cardTitle="Human Exemplar: The Pit Fighters" points={6104} />
            </Col>
            <Col>
              <GameCard cardImage={RobotImage3} cardTitle="Human Exemplar: The Pit Fighters" points={6104} />
            </Col>
            <Col>
              <GameCard cardImage={RobotImage1} cardTitle="Human Exemplar: The Pit Fighters" points={6104} />
            </Col>
          </Row>
        </section>

        <section className="my-4">
          <div className="mb-4 pb-2 d-flex justify-content-between align-items-center border-bottom">
            <h2 className="text-capitalize font-lg text-secondary">games</h2>
            <Link to="/" className="text-pramiry text-uppercase font-lg">
              view all
            </Link>
          </div>
          <Row>
            <Col className="p-4">
              <Link to="/games">
                <img src={GameBanner1} width={215} height={122} className="rounded mx-auto d-block" alt="game" />
              </Link>
            </Col>
            <Col className="p-4">
              <Link to="/games">
                <img src={GameBanner2} width={215} height={122} className="rounded mx-auto d-block" alt="game" />
              </Link>
            </Col>
            <Col className="p-4">
              <Link to="/games">
                <img src={GameBanner3} width={215} height={122} className="rounded mx-auto d-block" alt="game" />
              </Link>
            </Col>
            <Col className="p-4">
              <Link to="/games">
                <img src={GameBanner4} width={215} height={122} className="rounded mx-auto d-block" alt="game" />
              </Link>
            </Col>
            <Col className="p-4">
              <Link to="/games">
                <img src={GameBanner5} width={215} height={122} className="rounded mx-auto d-block" alt="game" />
              </Link>
            </Col>
          </Row>
        </section>

        <section className="my-4">
          <div className="mb-4 pb-2 d-flex justify-content-between align-items-center border-bottom">
            <h2 className="text-capitalize font-lg text-secondary">news</h2>
            <Link to="/" className="text-pramiry text-uppercase font-lg">
              view all
            </Link>
          </div>
          <Row>
            <Col className="p-4" md={4}>
              <Card>
                <Card.Img variant="top" src={NewsBanner1} />
                <Card.Body>
                  <Card.Title>Founder's Node Proposal - Two New Gaming Titles</Card.Title>
                  <Card.Text className="my-4">
                    Founder’s Node Proposal — Two New Gaming Titles Well, this is a little awkward. We’re preparing to
                    reveal and open presale for two incredibly...
                  </Card.Text>
                  <Link className="btn btn-primary text-white text-center d-block mx-auto" to="/blog">
                    Read more...
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-4" md={4}>
              <Card>
                <Card.Img variant="top" src={NewsBanner2} />
                <Card.Body>
                  <Card.Title>Founder's Node Proposal - Two New Gaming Titles</Card.Title>
                  <Card.Text>
                    Founder’s Node Proposal — Two New Gaming Titles Well, this is a little awkward. We’re preparing to
                    reveal and open presale for two incredibly...
                  </Card.Text>
                  <Link className="btn btn-primary text-white text-center d-block mx-auto" to="/blog">
                    Read more...
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-4" md={4}>
              <Card>
                <Card.Img variant="top" src={NewsBanner1} />
                <Card.Body>
                  <Card.Title>Founder's Node Proposal - Two New Gaming Titles</Card.Title>
                  <Card.Text>
                    Founder’s Node Proposal — Two New Gaming Titles Well, this is a little awkward. We’re preparing to
                    reveal and open presale for two incredibly...
                  </Card.Text>
                  <Link className="btn btn-primary text-white text-center d-block mx-auto" to="/blog">
                    Read more...
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Home;
