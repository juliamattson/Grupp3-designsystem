import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { CartContext, CartConsumer, ContextState } from "./context/cartContext";
import { Row, Col, Card, Button } from "react-bootstrap";
import { ProductType, storeProducts } from "../data";

interface Props {
    product: ProductType;
}
interface State {}

export default class Product extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const selectedId = this.props.product.id;

        const selectedProduct = this.props.product;

        const foundProduct = storeProducts.find((product) => {
            return product.id == selectedId;
        });
    }

    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <CartConsumer>
                {(contextData: ContextState) => {
                    return (
                        <Row className="product-row">
                <Col>
                    <Card style={{ width: "16rem" }}>
                        <Link to={"/details/" + id}>
                            <Card.Img
                                variant="top"
                                src={img}
                                alt="product"
                                onClick={() =>
                                    console.log(
                                        "You clicked me on the image container!"
                                    )
                                }
                            />
                        </Link>
                        <Button
                            className="cart-btn"
                            disabled={inCart ? true : false}
                            onClick={() => {
                                console.log("Added to cart!!!");
                            }}
                        >
                            {inCart ? (
                                <p className="text-capitalize mb-0">
                                    {" "}
                                    in inCart
                                </p>
                            ) : (
                                <i className="fas fa-cart-plus" />
                            )}
                        </Button>{" "}
                        {/*cart footer*/}
                        <Row className="card-footer d-flex justify-content-between">
                            <Col>
                                <Card style={{ width: "18rem" }}>
                                    <Link to={"/details/" + id}>
                                        <Card.Img
                                            variant="top"
                                            src={img}
                                            alt="product"
                                            onClick={() =>
                                                console.log(
                                                    "You clicked me on the image container!"
                                                )
                                            }
                                        />
                                    </Link>
                                    <Button
                                        className="cart-btn"
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            contextData.addProductToCart(
                                                this.props.product
                                            );
                                        }}
                                    >
                                        {inCart ? (
                                            <p className="text-capitalize mb-0">
                                                {" "}
                                                in inCart
                                            </p>
                                        ) : (
                                            <i className="fas fa-cart-plus" />
                                        )}
                                    </Button>{" "}
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
                    );
                }}
            </CartConsumer>
        );
    }
}
