import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyMain from "./Components/MyMain.jsx";
import MyNavbar from "./Components/MyNavbar.jsx";
import MySidebar from "./Components/MySidebar.jsx";
import MyPlayer from "./Components/MyPlayer.jsx";


function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={0} md={4} lg={3} className="p-0 ">
            <MySidebar />
          </Col>

          <Col xs={12} md={8} lg={9}>
            <MyNavbar />
            <h2>Your favourites</h2>
            <MyMain artist={"queen"} />
            <h2>Most liked</h2>
            <MyMain artist={"zombies"} />
            <h2>Other artists</h2>
            <MyMain artist={"beatles"} />
          </Col>
        </Row>
      </Container>
      <footer>
        <MyPlayer />
      </footer>

    </div>
  );
}

export default App;
