import React from "react";
import { Col, Row, Button } from "react-bootstrap";

interface CTAProps {
  title: string;
  desc: string;
  buttonText: string;
  image: string;
  url: string;
}

export default function CallToAction(props: CTAProps): React.JSX.Element {
  const { title, desc, buttonText, image, url } = props;
  return (
    <div className="container my-5">
      <Col className="d-md-none d-block" md={6} sm={12}>
        <img src={image} alt="CTA Image" width="90%" />
      </Col>
      <Row
        className="justify-content-center align-items-center"
        style={{ minHeight: "400px", margin: "auto" }}
      >
        <Col md={6} sm={12}>
          <div style={{ width: "100%" }} className="pr-1">
            <h2>{title}</h2>
            <p>{desc}</p>
            <Button>
              <a className="text-light" href={url}>
                {buttonText}
              </a>
            </Button>
          </div>
        </Col>
        <Col className="d-md-block d-none" md={6} sm={12}>
          <img src={image} alt="CTA Image" width="90%" />
        </Col>
      </Row>
    </div>
  );
}
