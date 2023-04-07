import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => (
  <Navbar className="text-white" style={{ backgroundColor: "#ff9900" }}>
    <Container fluid className="">
      <Navbar.Brand href="#home" className="mb-3 text-white">
        App Meteo Epicode
      </Navbar.Brand>
      <Nav className="ms-auto text-white ">
        <Nav.Link href="#home" className="text-white text-center me-3 border rounded-5 px-4 nav-btn">
          Home
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNav;
