import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { IoLogoDiscord } from "react-icons/io5";
import { MainLogo } from "../../assets";

const HeaderNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="white" className="px-4 mb-3">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={MainLogo} width={43} height={58} className="d-inline-block align-top" alt="Track Game" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar">
          <Nav className="mx-auto d-flex align-items-center">
            <NavLink to="/" className="mx-2 text-secondary text-capitalize navbar-link">
              home
            </NavLink>
            <NavLink to="/store" className="mx-2 text-secondary text-capitalize navbar-link praimaryText-hover">
              store
            </NavLink>
            <NavLink to="/games" className="mx-2 text-secondary text-capitalize navbar-link praimaryText-hover">
              games
            </NavLink>
            <NavLink to="/nodes" className="mx-2 text-secondary text-capitalize navbar-link praimaryText-hover">
              nodes
            </NavLink>
            <NavLink to="/track" className="mx-2 text-secondary text-capitalize navbar-link praimaryText-hover">
              get TRACK
            </NavLink>
            <NavLink to="/careers" className="mx-2 text-secondary text-capitalize praimaryText-hover">
              careers
            </NavLink>
            <Nav.Link href="#" className="mx-2 text-secondary text-capitalize praimaryText-hover">
              <IoLogoDiscord size={"2em"} className="me-1" /> join discord
            </Nav.Link>
          </Nav>
          <Nav className="mr-auto navbar-buttons">
            <NavLink to="/register" className="btn btn-primary text-white rounded text-capitalize px-4">
              register
            </NavLink>
            <NavLink to="/login" className="btn btn-primary text-white rounded text-capitalize px-4">
              login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavbar;
