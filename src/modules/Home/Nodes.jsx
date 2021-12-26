import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BackgroundImage2,
  FeatureImage1,
  FeatureImage2,
  FeatureImage3,
  FeatureImage4,
  Lego5,
  Lego6,
} from "../../assets";

const Nodes = () => {
  return (
    <Container>
      <Row className="nodes-section">
        <Col md={6}>
          <h2>Track Nodes</h2>
          <p>
            Open up opportunities to receive rewards like TRACK, limited edition NFT's and the chance to help the Track
            Games ecosystem grow.
          </p>
        </Col>
        <Col>
          <img src={FeatureImage1} alt="Track Node" className="mx-auto d-block" />
        </Col>
      </Row>
      <Row className="bg-secondary p-5 text-white rounded">
        <Col md={6} className="position-relative">
          <img className="founder-node-image" src={BackgroundImage2} alt="founder node" />
        </Col>
        <Col md={6}>
          <h3>Get a Founder's Node Today</h3>
          <p>
            The Track Network is supported by users, just like you, who operate Track Nodes from their home computers.
            By buying a license to operate a Track Node, you open up opportunities to receive rewards for your
            contribution to the network.
          </p>
          <p>
            This can include GALA, limited edition NFTs, and opportunities to help the Gala Games ecosystem grow. Have
            any questions?
          </p>
          <p>Chat with us on Discord.</p>

          <div className="mt-3">
            <Link to="/" className="btn btn-primary text-white rounded text-capitalize px-4 me-3">
              buy now
            </Link>
            <Link to="/" className="btn btn-primary text-white rounded text-capitalize px-4">
              learn more
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="my-4">
        <div className="mb-4 pb-2 d-flex justify-content-between align-items-center">
          <h3 className="text-capitalize font-smiMd text-secondary">Global Distribution Results - Dec 18th</h3>
          <Link to="/" className="text-primary text-uppercase font-smiMd">
            view all
          </Link>
        </div>
        <Row>
          <Col md={6}>
            <div className="px-4">
              <div className="bg-secondary text-white d-flex align-items-center rounded">
                <div className="feature-image me-3 p-4">
                  <img src={FeatureImage1} alt="Track nodes" width={121} />
                </div>
                <p className="mb-0 font-md">0 Track</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="px-4">
              <div className="bg-secondary text-white d-flex align-items-center rounded">
                <div className="feature-image me-3 p-4">
                  <img src={FeatureImage2} alt="Track nodes" width={121} />
                </div>
                <p className="mb-0 font-md">28,634 points</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="px-4 mt-4">
              <div className="bg-secondary text-white d-flex align-items-center rounded">
                <div className="feature-image me-3 p-4">
                  <img src={FeatureImage3} alt="Track nodes" width={121} />
                </div>
                <p className="mb-0 font-md">0 items</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="px-4 mt-4">
              <div className="bg-secondary text-white d-flex align-items-center rounded">
                <div className="feature-image me-3 p-4">
                  <img src={FeatureImage4} alt="Track nodes" width={121} />
                </div>
                <p className="mb-0 font-md">24,635 nodes online now</p>
              </div>
            </div>
          </Col>
        </Row>
      </Row>

      <Row className="my-4">
        <div className="mb-4 pb-2 d-flex justify-content-between align-items-center">
          <h3 className="text-capitalize font-smiMd text-secondary">Game Node</h3>
          <Link to="/" className="text-primary text-uppercase font-smiMd">
            view all
          </Link>
        </div>
        <div className="bg-secondary text-white overflow-hidden">
          <Row className="align-items-center justify-content-center text-center">
            <Col md={3}>
              <img src={Lego5} alt="VoxBlox Games" title="VoxBlox Games" />
            </Col>
            <Col md={6}>
              <h2 className="text-primary">VoxBlox Games</h2>
              <p className="mb-0">
                Open up opportunities to receive rewards in TOWN, limited edition NFT's, and the chance to help the Town
                Star ecosystem grow.
              </p>
              <div className="d-flex mt-4 justify-content-center">
                <Link to="/" className="btn btn-primary text-white rounded text-capitalize px-4 me-3">
                  get node
                </Link>
                <Link to="/" className="btn btn-primary text-white rounded text-capitalize px-4">
                  more inf
                </Link>
              </div>
            </Col>
            <Col md={3}>
              <img src={Lego6} alt="VoxBlox Games" title="VoxBlox Games" />
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default Nodes;
