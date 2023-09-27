import { Container, Button, Form } from "react-bootstrap";

export default function NewsLetter(): React.JSX.Element {
  return (
    <div className="text-center p-5 align-items-center">
      <Container>
        <div className="mb-3" style={{ textAlign: "center" }}>
          <h2>Subscribe to Newsletter</h2>
        </div>

        <div>
          <Form
            className="align-items-center d-flex"
            style={{
              width: "75%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #bbb",
              borderRadius: "10px",
              margin: "auto",
              padding: "3px",
            }}
          >
            <Form.Control
              type="email"
              placeholder="Enter email"
              style={{ width: "100%", border: "none" }}
            />
            <Button>Subscribe</Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}
