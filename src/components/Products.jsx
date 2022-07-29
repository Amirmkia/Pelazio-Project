import {Component} from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { addFavoriteTerm, removeFavoriteTerm } from "../actions/index";
import "../../src/App.css";
import { Col } from "react-bootstrap";
import RealProducts from './RealProducts';
import FavoriteProducts from "./FavoriteProducts";
import Table from 'react-bootstrap/Table';




const mapStateToProps = (state) => {
  return {
    terms: state.terms,
    favorites: state.favorites,
  };
};


class Products extends Component {

  state = {
    showFavorites: false,
  };

  toggleFavorites = () => {
    this.setState({ showFavorites: true });
  }
  toggleCards = () => {
    this.setState({ showFavorites: false });
  }

  render() {
    if (this.state.showFavorites) {
      return (
        <>
          <h1 className="App">Pelazio Project</h1>
          <RealProducts clickMe = {this.toggleCards} />
          {this.props.favorites.map((term, index) => {
            return (
              <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{index}</td>
                  <td>{term.title}</td>
                  <td>{term.price}</td>
                  <td><Button variant = "danger" onClick = {() =>
                     this.props.dispatch(removeFavoriteTerm(term.title))}>Remove</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
            );
          })}
        </>
      );
    } else
      return (
        <>
          <h1 className="App">Pelazio project</h1>
          <FavoriteProducts clickMe = {this.toggleFavorites} />
          {this.props.terms.map((term, index) => {
            return (
              <Col>
                <Card className="box" key={index}>
                  <Card.Img variant="top" src={term.image} />
                  <Card.Body>
                    <Card.Title>{term.title}</Card.Title>
                    <Card.Text>{term.description}</Card.Text>
                    <Card.Footer>Price : {term.price}</Card.Footer>
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
        </>
      );
  }
}

export default connect(mapStateToProps, null)(Products);
