/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../../components/form/form";
import ContactHeader from "../../layouts/headers/contact";
import Contact from "../../assets/images/3.png";
import Partners from "../../layouts/sections/partners";

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <h4 className="text-center mb-5">Send us a message, We're always here to help</h4>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6} xs={12}>
            <div style={{ width: "90%" }}>
              <img src={Contact} alt="Header" height="100%" width="100%" />
            </div>
          </Col>

          <Col sm={12} md={6} lg={6} xs={12}>
            <ContactForm />
          </Col>
        </Row>
        <Partners />
      </Container>
    </>
  );
}
