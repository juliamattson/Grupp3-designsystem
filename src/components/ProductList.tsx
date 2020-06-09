import React, { Component } from "react";
import Product from "./Product";
import { Container, Row } from "react-bootstrap";
import Title from "./Title";
import { storeProducts } from "../data";

export default class productList extends Component {
  
  render() {
    return (
      <Container>
        <Title name="Våra" title=" Produkter" />
        <Row>
          
            {
               storeProducts.map(ProductType  => {
                return <Product key={ProductType.id} product={ProductType} />;
              })
            }
        </Row>
      </Container>
    )
  }
}
