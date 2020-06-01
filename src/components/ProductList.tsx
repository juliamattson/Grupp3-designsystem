import React, { Component } from 'react';
import Product from "./Product"
import { Container, Row, Col } from 'react-bootstrap';
import Title from "./Title";
import { ProductConsumer } from './context'
import product from './Product';


export default class productList extends Component {
  
  render() {
    return (
      <Container>
        <Title name="our" title="products" />
        <Row>
          <ProductConsumer>
            {value => {
              return value.products.map(product => {
                return <Product key={product.id} product={product} />;
              })
            }}
          </ProductConsumer>
        </Row>
      </Container>
    )
  }
}

