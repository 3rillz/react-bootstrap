/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Container, Row } from "react-bootstrap";
import AboutHeader from "../../layouts/headers/about";
import Who from "../../assets/images/1.png";
import What from "../../assets/images/2.png";
import FeatureItem from "../../components/features/features";
import Partners from "../../layouts/sections/partners";

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <Container className="pt-5">
        <Row
          className="justify-content-between align-items-center"
          style={{ minHeight: "400px" }}
        >
          <Col sm={12} md={6} lg={6} xs={12}>
            <div style={{ width: "80%" }}>
              <h1 className="text-dark">Who We Are</h1>
              <p className="text-dark text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                praesentium eligendi aliquam sunt quas pariatur quibusdam suscipit
                exercitationem sint doloremque odit, natus reiciendis ex alias libero ad
                cumque eveniet esse? Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Dignissimos, nobis!
              </p>
            </div>
            <Button href="../pages/about">Learn More</Button>
          </Col>
          <Col sm={12} md={6} lg={6} xs={12} className="d-lg-block d-none">
            <div style={{ width: "90%" }}>
              <img src={Who} alt="Header" height="100%" width="100%" />
            </div>
          </Col>
        </Row>
        <Row
          className="justify-content-between align-items-center"
          style={{ minHeight: "400px" }}
        >
          <Col sm={12} md={6} lg={6} xs={12} className="d-lg-block d-none">
            <div style={{ width: "90%" }}>
              <img src={What} alt="Header" height="100%" width="100%" />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} xs={12}>
            <div style={{ width: "80%" }}>
              <h1 className="text-dark">What We Do</h1>
              <p className="text-dark text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, officia,
                mollitia illo repudiandae ullam, aperiam eveniet esse voluptate
                praesentium excepturi tempore? Repellendus vero iste saepe, asperiores
                neque magni necessitatibus voluptatum? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptatum, dignissimos.
              </p>
            </div>
            <Button href="../pages/about">Learn More</Button>
          </Col>
        </Row>
        <Row className="justify-content-between align-items-center mt-5">
          <Col sm={6} md={6} lg={4} xs={12}>
            <FeatureItem />
          </Col>
          <Col sm={6} md={6} lg={4} xs={12}>
            <FeatureItem />
          </Col>
          <Col sm={6} md={6} lg={4} xs={12}>
            <FeatureItem />
          </Col>
        </Row>
      </Container>
      <Partners />
    </>
  );
}
