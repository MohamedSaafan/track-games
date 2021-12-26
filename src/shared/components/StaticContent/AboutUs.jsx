import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Lego9, RobotImage2 } from "../../../assets/index";
import MiniGamesSection from "../../../modules/Home/MiniGamesSection";
import NewsSection from "../../../modules/Home/NewsSection";
import PartnersSection from "../../../modules/Home/PartnersSection";

const About = () => {
  return (
    <>
      <Container>
        <Row className="align-items-center mx-auto">
          <Col md={5}>
            <img src={Lego9} alt="lego group" />
          </Col>
          <Col md={6}>
            <p className="leading font-lg">Making blockchain games you'll actually want to play.</p>
          </Col>
        </Row>
        <Row>
          <Carousel className="bg-secondary rounded" slide={false} prevIcon={<></>} nextIcon={<></>}>
            <Carousel.Item>
              <Row className="d-flex p-5">
                <Col className="disciplines-content text-white">
                  <h3 className="mb-4">Fun First</h3>
                  <p>
                    We believe the blockchain should be invisible in our games. We use simple game mechanics that all
                    players can enjoy, whether or not they consider themselves to be blockchain pros.
                  </p>
                </Col>
                <Col className="text-end">
                  <img src={RobotImage2} width={215} height={236} alt="dd" />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="d-flex p-5">
                <Col className="disciplines-content text-white">
                  <h3>Operations</h3>
                  <p>
                    If you want to make an impact on a small team that's growing fast, on the experiences of huge
                    numbers of gamers, on the future of our industry itself -- then keep an eye out for roles in the
                    team.
                  </p>
                  <button className="btn btn-primary text-white btn-lg">see available postions</button>
                </Col>
                <Col className="text-end">
                  <img src={RobotImage2} width={215} height={236} alt="dd" />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row className="d-flex p-5">
                <Col className="disciplines-content text-white">
                  <h3>Operations</h3>
                  <p>
                    If you want to make an impact on a small team that's growing fast, on the experiences of huge
                    numbers of gamers, on the future of our industry itself -- then keep an eye out for roles in the
                    team.
                  </p>
                  <button className="btn btn-primary text-white btn-lg">see available postions</button>
                </Col>
                <Col className="text-end">
                  <img src={RobotImage2} width={215} height={236} alt="dd" />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <section className="my-4 text-center about-section-img">
        <Container>
          <h2 className="font-lg mb-5">More than 16,000 player-run nodes power our ecosystem</h2>
          <p className="mt-0 mb-auto">
            The decentralized Gala Games ecosystem aspires to blow the doors wide open and give players back the control
            they deserve. Through decentralization, players not only own their in-games items, but they have a voice in
            how the Track Games roadmap develops. Players and node owners will be enlisted, via distributed voting
            mechanisms, to help determine what games should be added to the platform or what should be funded by the
            decentralized Track Games ecosystem.
          </p>
        </Container>
      </section>
      <Container>
        <NewsSection />
        <MiniGamesSection />
        <PartnersSection />
      </Container>
    </>
  );
};

export default About;
