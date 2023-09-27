import { Container, Row, Col } from "react-bootstrap";
import Partner1 from "../../assets/images/partner-2.png";
import Partner2 from "../../assets/images/partner-3.png";
import Partner3 from "../../assets/images/partner-4.png";
import Partner4 from "../../assets/images/partner-5.png";
import Partner5 from "../../assets/images/partner-6.png";

export default function Partners(): React.JSX.Element {
  return (
    <div className="justify-content-center p-5 align-items-center">
      <Container>
        <Row>
          <Col lg={2} sm={6}>
            <img src={Partner1} alt="1" />
          </Col>
          <Col lg={2} sm={6}>
            <img src={Partner2} alt="2" />
          </Col>
          <Col lg={2} sm={6}>
            <img src={Partner3} alt="3" />
          </Col>
          <Col lg={2} sm={6}>
            <img src={Partner4} alt="4" />
          </Col>
          <Col lg={2} sm={6}>
            <img src={Partner5} alt="5" />
          </Col>
          <Col lg={2} sm={6}>
            <img src={Partner2} alt="2" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
