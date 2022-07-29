import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Lists from "./Lists";

function App() {
  return (
    <Container fluid>
      <Row>
        <Lists />
      </Row>
    </Container>
  );
}

export default App;
