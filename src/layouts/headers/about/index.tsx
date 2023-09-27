import { Container } from "react-bootstrap";

export default function AboutHeader(): React.JSX.Element {
  return (
    <header className="header pb-5 mb-5 bg-dark text-center">
      <Container className="pt-5">
        <div style={{ width: "100%" }}>
          <h1 className="text-light">About Us</h1>
        </div>
      </Container>
    </header>
  );
}
