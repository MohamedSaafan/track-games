import { Container, Row, Col, Carousel } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { Lego1, Lego2, Lego3, Lego4, RobotImage2, RobotImage1, RobotImage3, CareersImage } from "../../assets/index";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <>
      <Container className="mb-4">
        <section className="my-4">
          <div className="d-flex select-game">
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
          <Row className="my-4">
            <div className="mb-4 pb-2 d-flex justify-content-between align-items-center">
              <h3 className="text-capitalize font-smiMd text-secondary">Game Node</h3>
              <Link to="/" className="text-primary text-uppercase font-smiMd">
                view all
              </Link>
            </div>
            <div className="overflow-hidden">
              <Row className="align-items-center justify-content-center text-center">
                <Col md={4}>
                  <img src={Lego1} height={200} alt="VoxBlox Games" title="VoxBlox Games" />
                </Col>
                <Col md={4}>
                  <h2 className="font-lg fw-light">Join the Gaming Revolution!</h2>
                </Col>
                <Col md={4}>
                  <img src={Lego3} height={300} alt="VoxBlox Games" title="VoxBlox Games" />
                </Col>
              </Row>
            </div>
          </Row>
          <section className="m-4">
            <p className="text-center">
              From a founder of Zynga and some of the creative minds that brought us 'FarmVille' and 'Words With
              Friends', comes a team ready to unleash blockchain for gamers.
            </p>
          </section>
          <section className="mb-4">
            <Row className="align-items-center justify-content-center text-center">
              <Col md={4}>
                <img src={Lego2} height={200} alt="VoxBlox Games" title="VoxBlox Games" />
              </Col>
              <Col md={4}>
                <Link to="/" className="btn btn-primary d-block text-white large-button">
                  Work with us
                </Link>
              </Col>
              <Col md={4}>
                <img src={Lego4} height={250} alt="VoxBlox Games" title="VoxBlox Games" />
              </Col>
            </Row>
          </section>

          <section className="mb-4 bg-secondary rounded our-mission-container">
            <div className="our-mission mb-4 bg-light rounded-3">
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
            <div className="careers-bg text-white overflow-hidden rounded">
              <Row className="align-items-center justify-content-center text-center">
                <Col md={3}>
                  <img src={RobotImage1} width={223} alt="VoxBlox Games" title="VoxBlox Games" />
                </Col>
                <Col md={6} className="my-sm-4">
                  <h2 className="text-primary">Be a player on the Track Games team</h2>
                  <p className="mb-0">
                    There are over 2.5 billion people in the world that play games. That means there are 2.5 billion
                    people exposed to the potential of blockchain and crypto currencies. We believe gaming can change
                    the world of players.
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
          <Row className="my-5">
            <div className="overflow-hidden rounded">
              <Row className="align-items-center justify-content-center text-center">
                <Col md={6} className="text-left">
                  <h2>Our Global, Remote Team</h2>
                  <p className="mt-4 text-start">
                    has brought together a highly skilled team. Those who have founded, scaled, and exited high-value,
                    high-volume games combined with those who have deep expertise in emerging technology and digital
                    currencies. Culturally, we value flexibility and creativity in the workspace. For that reason, we
                    all work remotely, full time. Gone are the days of long commutes and cubicles. We believe our
                    workforce thrives from that freedom and outputs even more creativity and inventiveness due to the
                    lack of physical constraints on their work flow.
                  </p>
                </Col>
                <Col md={6}>
                  <img src={CareersImage} alt="VoxBlox Games" title="VoxBlox Games" />
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </Container>
      <section className="careers-bg text-white">
        <Container>
          <h2 className="text-primary">Our Values</h2>
          <Row className="mt-5">
            <Col md={4}>
              <h3 className="text-primary">Play on</h3>
              <p>We will keep improving experience by:</p>
              <ul className="mt-5">
                <li>Being agile</li>
                <li>Ask questions, get feedback</li>
                <li>Getting immersed (in the space)</li>
                <li>Using our initiative</li>
              </ul>
            </Col>
            <Col md={4}>
              <h3 className="text-primary">Play on</h3>
              <p>We will keep improving experience by:</p>
              <ul className="mt-5">
                <li>Being agile</li>
                <li>Ask questions, get feedback</li>
                <li>Getting immersed (in the space)</li>
                <li>Using our initiative</li>
              </ul>
            </Col>
            <Col md={4}>
              <h3 className="text-primary">Play on</h3>
              <p>We will keep improving experience by:</p>
              <ul className="mt-5">
                <li>Being agile</li>
                <li>Ask questions, get feedback</li>
                <li>Getting immersed (in the space)</li>
                <li>Using our initiative</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-4">
        <Container>
          <h2 className="mb-4 text-center">Department</h2>
          <Row>
            <Col md={6} sm={12} className="ps-0">
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Col>
          </Row>

          <Row className="p-5 mt-3 mb-5 bg-secondary text-white rounded">
            <Col md={6}>
              <div className="department-section">
                <h3 className="mb-4">Mirandus Roles</h3>
                <div className="departments-links">
                  <a href="/" className="text-primary my-3 d-block">
                    Mirandus: Senior Game/MMO Networking Enginner
                  </a>
                  <a href="/" className="text-primary my-3 d-block">
                    Mirandus: Full Stack Game Engineer
                  </a>
                  <a href="/" className="text-primary my-3 d-block">
                    Mirandus: Gameplay/UI/Tools Engineer
                  </a>
                  <a href="/" className="text-primary my-3 d-block">
                    Mirandus: Senior Game/MMO Networking Enginner
                  </a>
                  <a href="/" className="text-primary my-3 d-block">
                    Mirandus: Senior Game/MMO Networking Enginner
                  </a>
                  <a href="/" className="text-primary my-3 d-block">
                    Mirandus: Senior Game/MMO Networking Enginner
                  </a>
                </div>
              </div>
              <div className="department-section">
                <h3 className="mb-4">Track Labs Roles</h3>
                <div className="departments-links">
                  <a href="/" className="text-primary my-3 d-block">
                    Social Media Manager
                  </a>
                  <a href="/" className="text-primary my-3 d-block">
                    Marketing and Content Manager
                  </a>
                  <a href="/" className="text-primary my-3 d-block">
                    Video Editor
                  </a>
                  <a href="/" className="text-primary my-3 d-block">
                    Graphic Designer
                  </a>
                  <a href="/" className="text-primary my-3 d-block">
                    3D Character Animator
                  </a>
                  <a href="/" className="text-primary my-3 d-block">
                    Creative Producer
                  </a>
                </div>
              </div>
              <div className="department-section">
                <h3 className="mb-4">Operations Roles</h3>
                <div className="departments-links">
                  <a href="/" className="text-primary my-3 d-block">
                    Technical Recruiter
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="department-section">
                <h3 className="mb-4">Engineering Roles</h3>
                <div className="departments-links">
                  <a href="/" className="text-primary my-3 d-block">
                    Blockchain Engineer
                  </a>
                  <a href="/" className="text-primary my-3 d-block">
                    Full Stack Engineer
                  </a>
                  <a href="/" className="text-primary my-3 d-block">
                    Data Engineer
                  </a>
                  <a href="/" className="text-primary my-3 d-block">
                    Security Engineer
                  </a>
                </div>
              </div>
              <div className="department-section">
                <h3 className="mb-4">UI/UX Roles</h3>
                <div className="departments-links">
                  <a href="/" className="text-primary my-3 d-block">
                    Junior UX/UI Designer
                  </a>
                  <a href="/" className="text-primary my-3 d-block">
                    Senior UX/UI Designer
                  </a>
                </div>
              </div>
              <div className="department-section">
                <h3>Marketing Roles</h3>
                <div className="departments-links">
                  <a href="/" className="text-primary my-3 d-block">
                    User Acquisition Manager US/UK
                  </a>
                </div>
              </div>
              <div className="department-section">
                <h3>Town Star Roles</h3>
                <div className="departments-links">
                  <a href="/" className="text-primary my-3 d-block">
                    Game Engineer
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Careers;
