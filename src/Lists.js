import React from "react";
import { Col } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { addFavoriteTerm, removeFavoriteTerm } from "./actions";
import "./App.css";
const mapStateToProps = (state) => {
  return {
    terms: state.terms,
    favorites: state.favorites,
  };
};

class Lists extends React.Component {
  state = {
    showFavorites: false,
  };

  toggleFavorites() {
    this.setState({ showFavorites: true });
  }
  toggleJargon() {
    this.setState({ showFavorites: false });
  }

  render() {
    if (this.state.showFavorites) {
      return (
        <div>
          <h1 className="App">Pelazio Project</h1>
          <div>
            <button
              onClick={() => {
                this.toggleJargon();
              }}
            >
              {" "}
              Show Product List
            </button>
          </div>

          {this.props.favorites.map((term, index) => {
            return (
              <Col key={index} md={4} lg={4} xs={1}>
                <Card>
                  <Card.Img variant="top" src={term.image} />
                  <Card.Body>
                    <Card.Title>{term.title}</Card.Title>
                    <Card.Text>{term.description}</Card.Text>
                    <Button
                      variant="danger"
                      onClick={() =>
                        this.props.dispatch(removeFavoriteTerm(term.title))
                      }
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </div>
      );
    } else
      return (
        <div>
          <h1 className="App">Pelazio project</h1>
          <div>
            <button
              onClick={() => {
                this.toggleFavorites();
              }}
            >
              {" "}
              Show My Card
            </button>
          </div>
          {this.props.terms.map((term, index) => {
            return (
              <Col key={index} md={4} lg={4}>
                <Card>
                  <Card.Img variant="top" src={term.image} />
                  <Card.Body>
                    <Card.Title>{term.title}</Card.Title>
                    <Card.Text>{term.description}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() =>
                        this.props.dispatch(
                          addFavoriteTerm({
                            title: term.title,
                            description: term.description,
                            price: term.price,
                            image: term.image,
                          })
                        )
                      }
                    >
                      Add to Card
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </div>
      );
  }
}

export default connect(mapStateToProps, null)(Lists);
