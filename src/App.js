import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Products from "./components/Products";

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Row md={4} lg={4} xs={1}>
            <Products />
          </Row>
        </Container>
      </>
    );
  }
}
export default App;
