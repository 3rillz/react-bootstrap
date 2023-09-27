import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";

export default function MyNavbar(): React.JSX.Element {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#" className="text-light">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle className="text-light" aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
