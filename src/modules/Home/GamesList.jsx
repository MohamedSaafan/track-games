import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { AiOutlineSearch, AiOutlineFilter } from "react-icons/ai";
import { RobotImage1, SideBarImage1, SideBarImage2 } from "../../assets";
import GameCard from "./GameCard";

const GamesList = () => {
  return (
    <>
      <div className="games-hero">
        <Container>
          <h1 className="text-center text-white">Welcome to Track Games Store!</h1>
        </Container>
      </div>
      <Container className="my-4">
        <Row>
          <Col md={6}>
            <InputGroup size="md">
              <InputGroup.Text className="search-button-icon">
                <AiOutlineSearch className="me-3" />
                <AiOutlineFilter />
              </InputGroup.Text>
              <Form.Control aria-describedby="inputGroup-sizing-sm" placeholder="Search..." />
            </InputGroup>
          </Col>
          <Col md={3}>
            <Form.Select aria-label="Default select example">
              <option>Currency: All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select aria-label="Default select example">
              <option>Currency: All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="my-4">
          <Col md={8}>
            <Row>
              <Col md={4} className="my-4">
                <GameCard cardImage={RobotImage1} cardTitle="Human Exemplar: The Pit Fighters" points={6104} />
              </Col>
              <Col md={4} className="my-4">
                <GameCard cardImage={RobotImage1} cardTitle="Human Exemplar: The Pit Fighters" points={6104} />
              </Col>
              <Col md={4} className="my-4">
                <GameCard cardImage={RobotImage1} cardTitle="Human Exemplar: The Pit Fighters" points={6104} />
              </Col>
              <Col md={4} className="my-4">
                <GameCard cardImage={RobotImage1} cardTitle="Human Exemplar: The Pit Fighters" points={6104} />
              </Col>
              <Col md={4} className="my-4">
                <GameCard cardImage={RobotImage1} cardTitle="Human Exemplar: The Pit Fighters" points={6104} />
              </Col>
              <Col md={4} className="my-4">
                <GameCard cardImage={RobotImage1} cardTitle="Human Exemplar: The Pit Fighters" points={6104} />
              </Col>
              <Col md={4} className="my-4">
                <GameCard cardImage={RobotImage1} cardTitle="Human Exemplar: The Pit Fighters" points={6104} />
              </Col>
            </Row>
          </Col>
          <Col md={4} className="my-4">
            <div className="p-4 rounded" style={{ background: "#DDE8F5" }}>
              <h3 className="text-capitalize text-primary">games</h3>
              <hr />
              <div className="d-flex align-items-center">
                <img src={SideBarImage1} alt="d" className="me-3" />
                <span className="text-capitalize font-sm">vox</span>
              </div>
              <div className="d-flex align-items-center mt-4">
                <img src={SideBarImage2} alt="sidebar" className="me-3" />
                <span className="text-capitalize font-sm">BOT WAR</span>
              </div>
            </div>
            <div className="p-4 rounded mt-4" style={{ background: "#DDE8F5" }}>
              <h3 className="text-capitalize text-primary">rarity</h3>
              <hr />
              <Form.Group as={Row} className="mb-2" controlId="Common">
                <Col>
                  <Form.Check label="Common" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2" controlId="uncommon">
                <Col>
                  <Form.Check label="Uncommon" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2" controlId="epic">
                <Col>
                  <Form.Check label="Epic" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2" controlId="legendary">
                <Col>
                  <Form.Check label="Legendary" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2" controlId="ancient">
                <Col>
                  <Form.Check label="Ancient" />
                </Col>
              </Form.Group>
            </div>

            <div className="p-4 rounded mt-4" style={{ background: "#DDE8F5" }}>
              <h3 className="text-capitalize text-primary">availability</h3>
              <hr />
              <Form.Group as={Row} className="mb-2" controlId="SoldOut">
                <Col>
                  <Form.Check label="Sold Out" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2" controlId="available">
                <Col>
                  <Form.Check label="Available" />
                </Col>
              </Form.Group>
            </div>

            <div className="p-4 rounded mt-4" style={{ background: "#DDE8F5" }}>
              <h3 className="text-capitalize text-primary">type</h3>
              <hr />
              <Form.Group as={Row} className="mb-2" controlId="Exemplar">
                <Col>
                  <Form.Check label="Exemplar" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2" controlId="Waterbot">
                <Col>
                  <Form.Check label="Waterbot" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2" controlId="Land Deeds">
                <Col>
                  <Form.Check label="Land Deeds" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2" controlId="Farm Stands">
                <Col>
                  <Form.Check label="Farm Stands" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2" controlId="Body">
                <Col>
                  <Form.Check label="Body" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2" controlId="CraneBot">
                <Col>
                  <Form.Check label="CraneBot" />
                </Col>
              </Form.Group>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GamesList;
