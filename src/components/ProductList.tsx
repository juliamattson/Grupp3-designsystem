import React, { Component } from 'react';
import Product from "./Product"
import { Container,Row,Col } from 'react-bootstrap';
import Title from "./Title";
import {storeProducts} from '../data'









export default class productList extends Component {
    state = {
        products: storeProducts


    }
    render() {
      console.log(this.state.products);
        return (
        //  <Product />
        <Container>
            <Title name="our" title="products"/>
        <Row>
        </Row>
      </Container>
     
        )
    }
}

