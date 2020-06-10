import React, { Component } from "react";
import NavBar from "./Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./cart.css";
import CardGroup from "react-bootstrap/CardGroup";
import { CartConsumer, ContextState } from "./context/cartContext";
import CartItem from "./CartItem";
import { shippingAlternatives, Shipping } from "../shipping";

export interface State {
    selectedShipping: Shipping;
}

export default class Cart extends Component<{}, State> {
    state: State = {
        selectedShipping: shippingAlternatives[0],
    };

    render() {
        return (
            <CartConsumer>
                {(contextData: ContextState) => {
                    const totalCost =
                        contextData.getCartTotal() +
                        this.state.selectedShipping.price;
                    const priceText = "Summa: " + totalCost + " kr";
                    const confirmButton = (
                        <Button variant="primary" style={{ marginTop: "10px" }}>
                            Slutför köp
                        </Button>
                    );
                    return (
                        <div id="cartStyling">
                            <CardGroup>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Dina uppgifter</Card.Title>
                                        <Form>
                                            <Form.Text className="text-muted">
                                                Fyll i dina uppgifter nedan.
                                            </Form.Text>
                                            <hr />
                                            <Form.Group controlId="formBasicName">
                                                <Form.Control
                                                    autoComplete="on"
                                                    type="text"
                                                    placeholder="För och efternamn"
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control
                                                    autoComplete="on"
                                                    type="email"
                                                    placeholder="Email-adress"
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicNumber">
                                                <Form.Control
                                                    autoComplete="on"
                                                    type="text"
                                                    placeholder="Telefonnummer"
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicAdress">
                                                <Form.Control
                                                    autoComplete="on"
                                                    type="text"
                                                    placeholder="Adress"
                                                />
                                            </Form.Group>
                                            <Button
                                                variant="primary"
                                                type="submit"
                                            >
                                                Spara
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Betalsätt</Card.Title>
                                        <Card.Text>
                                            Här ska info och alternativ av
                                            betalsätt finnas
                                            <Form>
                                                {["radio"].map((type) => (
                                                    <div
                                                        key={`default-${type}`}
                                                        className="mb-3"
                                                    >
                                                        <Form.Check
                                                            type="radio"
                                                            label="Kort "
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios1"
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            label="Swish "
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios2"
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            label="Pay Pal"
                                                            name="formHorizontalRadios"
                                                            id="formHorizontalRadios3"
                                                        />
                                                    </div>
                                                ))}
                                            </Form>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Fraktsätt</Card.Title>
                                        <Card.Text>
                                            <Form.Text className="text-muted">
                                                Välj fraktalternativ nedan.
                                            </Form.Text>
                                            <hr />
                                            {shippingAlternatives.map(
                                                (shipping) => (
                                                    <Form.Check
                                                        type="radio"
                                                        value={shipping.id}
                                                        label={`${shipping.name} ${shipping.price}:- (Leverans inom ${shipping.deliveryTime} timmar)"`}
                                                        name={shipping.name}
                                                        key={shipping.id}
                                                        checked={
                                                            shipping.id ===
                                                            this.state
                                                                .selectedShipping
                                                                .id
                                                        }
                                                        onChange={() =>
                                                            this.setState({
                                                                selectedShipping: shipping,
                                                            })
                                                        }
                                                    />
                                                )
                                            )}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Kundvagn</Card.Title>
                                        <hr />
                                        {contextData.cartItems.length ? (
                                            contextData.cartItems.map(
                                                (cartItem, index) => {
                                                    return (
                                                        <CartItem
                                                            key={
                                                                cartItem.product
                                                                    .id
                                                            }
                                                            cartItems={cartItem}
                                                        />
                                                    );
                                                }
                                            )
                                        ) : (
                                            <h4>Kundvagnen är tom...</h4>
                                        )}
                                        <h4>
                                            {contextData.getNumOfItems() > 0
                                                ? priceText
                                                : ""}
                                        </h4>
                                        {contextData.getNumOfItems() > 0
                                            ? confirmButton
                                            : ""}
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </div>
                    );
                }}
            </CartConsumer>
        );
    }
}
