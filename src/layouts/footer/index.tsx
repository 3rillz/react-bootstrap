import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import Google from "../../assets/images/playstore.png";
import Ios from "../../assets/images/ios.png";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top";

export default function MyFooter(): React.JSX.Element {
  const footerDetails = {
    fontSize: "1.2rem",
  };
  return (
    <>
      <ScrollToTop />
      <footer className="footer pb-5 pt-5 mt-5 bg-dark text-center">
        <Container>
          <Row
            className="justify-content-center mb-3 py-3 my-3 bg-dark"
            style={{ marginTop: "-13px" }}
          >
            <img src={Logo} alt="Logo" />
            <h4 className="text-light">Peerwallet</h4>
          </Row>
          <Row>
            <Col className="text-left" sm={12} md={6} lg={3} xs={12}>
              <p className="text-light" style={footerDetails}>
                1b, Makarious Stree Off Addo Road, Ajah.
              </p>
              <p>
                <a href="tel:+2348124633050">+2348124633050</a>
              </p>
              <p>
                <a href="mailto:pitan.samuel4@gmail.com">pitan.samuel4@gmail.com</a>
              </p>
            </Col>
            <Col sm={12} md={6} lg={3} xs={12}>
              <h4 className="text-light">Company</h4>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
              <Nav.Link href="#">FAQ</Nav.Link>
            </Col>
            <Col sm={12} md={6} lg={3} xs={12}>
              <h4 className="text-light">Legal</h4>
              <Nav.Link href="#">Privacy Policy</Nav.Link>
              <Nav.Link href="#">Terms & Conditions</Nav.Link>
              <Nav.Link href="#">Site Map</Nav.Link>
            </Col>
            <Col sm={12} md={6} lg={3} xs={12}>
              <Nav.Link target="_blank" href="https://google.com">
                <img src={Google} alt="Logo" width="90%" height={70} />
              </Nav.Link>
              <br />
              <Nav.Link
                target="_blank"
                href="https://ios.com"
                style={{ marginTop: "-30px" }}
              >
                <img src={Ios} alt="Logo" width="90%" height={90} />
              </Nav.Link>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3 py-3 bg-dark">
            <span style={footerDetails} className="text-light">
              {new Date().getFullYear()} Peerwallet
            </span>
          </Row>
        </Container>
      </footer>
    </>
  );
}
