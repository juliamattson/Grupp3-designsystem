import React, { Component } from 'react';
import Product from "./Product"
import { Container, Row, Col } from 'react-bootstrap';
import Title from "./Title";
import { ProductConsumer } from './context'
import {ProductType} from '../data';


export default class productList extends Component {
  
  render() {
    return (
      <Container>
        <Title name="our" title="products" />
        <Row>
          <ProductConsumer>
            {value => {
              return value.products.map(ProductType  => {
                return <Product key={ProductType.id} product={ProductType} />;
              })
            }}
          </ProductConsumer>
        </Row>
      </Container>
    )
  }
}

