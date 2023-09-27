import { Col, Container, Row, Button } from "react-bootstrap";
import HeaderImage from "../../../assets/images/featured.png";

export default function HomeHeader(): React.JSX.Element {
  return (
    <header className="header pb-5 mb-5 bg-dark">
      <Container className="pt-5">
        <Row
          className="justify-content-between align-items-center"
          style={{ minHeight: "400px" }}
        >
          <Col sm={12} md={6} lg={6} xs={12}>
            <div style={{ width: "80%" }}>
              <h1 className="text-light">Welcome to Peerwallet Blog!</h1>
              <p className="text-light">
                Semi Decentralized p2p payment platform. Read from our numerous blog
                posts. Click below to learn more...
              </p>
            </div>
            <Button href="../pages/about">Learn More</Button>
          </Col>
          <Col sm={12} md={6} lg={6} xs={12} className="d-lg-block d-none">
            <div style={{ width: "90%" }}>
              <img src={HeaderImage} alt="Header" height="100%" width="100%" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
