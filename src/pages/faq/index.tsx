/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Container, Row } from "react-bootstrap";
import NewsLetter from "../../layouts/sections";
import FaqAccordion from "../../components/accordion/accordion";
import FaqHeader from "../../layouts/headers/faq";
import Faq from "../../assets/images/faq.png";
import CTAImage from "../../assets/images/1.png";
import CallToAction from "../../components/cta";

export default function FaqPage() {
  return (
    <>
      <FaqHeader />
      <CallToAction
        title="Frequently Asked Questions"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident praesentium eligendi aliquam sunt quas pariatur quibusdam suscipit exercitationem sint doloremque odit, natus reiciendis ex alias libero ad cumque eveniet esse? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, nobis!"
        image={CTAImage}
        buttonText="Get Started"
        url="/about"
      />
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6} xs={12}>
            <div style={{ width: "90%" }}>
              <img src={Faq} alt="Header" height="100%" width="100%" />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xs={12}>
            <FaqAccordion />
          </Col>
        </Row>
        <NewsLetter />
      </Container>
    </>
  );
}
