import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { CartContext, CartConsumer, ContextState } from "./context/cartContext";
import { Row, Col, Card, Button } from "react-bootstrap";
import { ProductType, storeProducts } from "../data";

interface Props {
    cartItems: {
        product: ProductType;
        quantity: number;
    };
}
interface State {}

export default class CartItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const product = this.props.cartItems.product;
        /* const quantity = this.props.cartItems.quantity; */
    }

    render() {
        const { id, title, img, price, inCart } = this.props.cartItems.product;
        const quantity = this.props.cartItems.quantity;
        return (
            <CartConsumer>
                {(contextData: ContextState) => {
                    return (
                        <Row>
                            <Col>
                                <Card style={{ maxWidth: "90%" }}>
                                    <Card.Img
                                        src={img}
                                        style={{
                                            width: "80px",
                                            height: "100px",
                                        }}
                                    />
                                    {title}
                                    <br />
                                    Pris: {price * quantity} kr
                                    <br />
                                    <div className="quantityButtonDiv">
                                        Antal:{" "}
                                        <Button
                                            variant="light"
                                            className="quantityButton"
                                        >
                                            -
                                        </Button>{" "}
                                        {quantity}{" "}
                                        <Button
                                            variant="light"
                                            className="quantityButton"
                                        >
                                            +
                                        </Button>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    );
                }}
            </CartConsumer>
        );
    }
}
