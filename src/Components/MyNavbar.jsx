import { Col, Container, Row } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Container fluid>
      <Row className="flex-row d-none d-md-flex pt-3 mb-3">
        <Col xs={2}>
          <h6>TRENDING</h6>
        </Col>
        <Col xs={2}>
          <h6>PODCAST</h6>
        </Col>
        <Col xs={3}>
          <h6>MOODS AND GENRES</h6>
        </Col>
        <Col xs={3}>
          <h6>NEW RELEASES</h6>
        </Col>
        <Col xs={2}>
          <h6>DISCOVER</h6>
        </Col>
      </Row>
    </Container>
  );
};
export default MyNavbar

