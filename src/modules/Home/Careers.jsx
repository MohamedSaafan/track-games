import { Container, Row, Col, Carousel } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { Lego1, Lego2, Lego3, Lego4, RobotImage2, RobotImage1, RobotImage3 } from "../../assets/index";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <Container className="mb-4">
      <section className="my-4">
        <div className="d-flex justify-content-between">
          <h2 className="text-capitalize">careers at track games</h2>
          <div className="d-flex gap-4">
            <div className="text-capitalize d-flex align-items-center">
              who we are <IoIosArrowDown className="ml-4" />
            </div>
            <div className="text-capitalize d-flex align-items-center">
              Job available <IoIosArrowDown className="ml-4" />
            </div>
          </div>
        </div>
      </section>

      <Container>
        <section className="m-4">
          <Row className="position-relative">
            <Col>
              <img src={Lego1} alt="leg1" width={222} height={202} className="lego-image" />
            </Col>
            <Col className="text-center d-flex align-items-center">
              <h1 className="font-lg fw-light">Join the Gaming Revolution!</h1>
            </Col>
            <Col>
              <img className="lego-image second-lego-image" src={Lego3} alt="leg1" width={313} height={343} />
            </Col>
          </Row>
        </section>
        <section className="m-4">
          <p className="text-center">
            From a founder of Zynga and some of the creative minds that brought us 'FarmVille' and 'Words With Friends',
            comes a team ready to unleash blockchain for gamers.
          </p>
        </section>
        <section className="mb-4">
          <Row className="position-relative">
            <Col>
              <img src={Lego2} alt="leg1" width={222} height={202} className="lego-image" />
            </Col>
            <Col className="text-center my-auto">
              <Link to="/" className="btn btn-primary d-block text-white large-button">
                Work with us
              </Link>
            </Col>
            <Col>
              <img className="lego-image second-lego-image" src={Lego4} alt="leg1" width={313} height={343} />
            </Col>
          </Row>
        </section>

        <section className="mb-4 bg-secondary rounded mx-5">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid p-lg-5 text-center">
              <h2 className="display-5 fw-bold text-primary">Our Mission</h2>
              <p className="text-white">
                To change gaming for good, unleashing the power of blockchain to give more to you, the players.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-4 bg-secondary rounded">
          <Carousel slide={false} prevIcon={<></>} nextIcon={<></>}>
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
        </section>
        <Row className="my-4">
          <div className="bg-secondary text-white overflow-hidden rounded py-4">
            <Row className="align-items-center justify-content-center text-center">
              <Col md={3}>
                <img src={RobotImage1} width={223} alt="VoxBlox Games" title="VoxBlox Games" />
              </Col>
              <Col md={6}>
                <h2 className="text-primary">Be a player on the Track Games team</h2>
                <p className="mb-0">
                  There are over 2.5 billion people in the world that play games. That means there are 2.5 billion
                  people exposed to the potential of blockchain and crypto currencies. We believe gaming can change the
                  world of players.
                </p>
                <Link to="/careers" className="btn btn-primary text-white rounded text-capitalize px-4 mt-4 me-3">
                  See all open positions
                </Link>
              </Col>
              <Col md={3}>
                <img src={RobotImage3} width={223} alt="VoxBlox Games" title="VoxBlox Games" />
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default Careers;
