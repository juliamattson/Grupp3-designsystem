import React, { Component } from "react";
import Product from "./Product";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";
import { ProductType, storeProducts } from "../data";

export default class productList extends Component {
    render() {
        return (
            <Container>
                <Title name="our" title="products" />
                <Row>
                    {storeProducts.map((ProductType) => {
                        return (
                            <Product
                                key={ProductType.id}
                                product={ProductType}
                            />
                        );
                    })}
                </Row>
            </Container>
        );
    }
}
