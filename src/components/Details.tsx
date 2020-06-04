import React, { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ProductType } from "../data";

interface props {
    product: ProductType;
}

export default class Details extends Component<props> {
    render() {
        const { id, title, img, price, info } = this.props.product;
        return (
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={img} alt="product" />
                            <Button
                                className="cart-btn"
                                onClick={() => {
                                    console.log("Added to cart!!!");
                                }}
                            ></Button>{" "}
                            {/*cart footer*/}
                            <Row className="card-footer d-flex justify-content-between">
                                <Col>
                                    <p className="align-self-center mb-0">
                                        {title}
                                    </p>
                                    <h4 className="text-blue font-italic mb-0">
                                        {price}
                                        <span>kr</span>
                                    </h4>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
