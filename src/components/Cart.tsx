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
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Payment from "./pay";

export interface State {
    selectedShipping: Shipping;
    validated: boolean;
}

export default class Cart extends Component<{}, State> {
    state: State = {
        selectedShipping: shippingAlternatives[0],
        validated: false,
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // Navigate to confirmation page and delete cart!
            // event.preventDefault();
            /* const history = useHistory();
            history.push("/checkout"); */

            alert("Slutfört Köp");
        }

        this.setState({ validated: true });
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
                        <Button
                            type="submit"
                            variant="primary"
                            style={{ marginTop: "10px" }}
                        >
                            Tack för din beställning!
                        </Button>
                    );

                    const getDeliveryDate = (days: number) => {
                        let today = new Date();
                        let deliverySec = today.setDate(today.getDate() + days);
                        let deliveryDay = new Date(
                            deliverySec
                        ).toLocaleDateString();
                        return deliveryDay;
                    };

                    const momsShipping = "(Inklusive moms och frakt)";
                    return (
                        <div id="cartStyling">
                            <Form
                                noValidate
                                validated={this.state.validated}
                                onSubmit={this.handleSubmit}
                            >
                                <CardGroup>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>
                                                Dina uppgifter
                                            </Card.Title>
                                            <Form.Text className="text-muted">
                                                Fyll i dina uppgifter nedan.
                                            </Form.Text>
                                            <hr />
                                            <Form.Group controlId="formBasicName">
                                                <Form.Control
                                                    required
                                                    autoComplete="on"
                                                    type="text"
                                                    placeholder="För och efternamn"
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Control
                                                    required
                                                    autoComplete="on"
                                                    type="email"
                                                    placeholder="Email-adress"
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicNumber">
                                                <Form.Control
                                                    required
                                                    autoComplete="on"
                                                    type="text"
                                                    placeholder="Telefonnummer"
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicAdress">
                                                <Form.Control
                                                    required
                                                    autoComplete="on"
                                                    type="text"
                                                    placeholder="Adress"
                                                />
                                            </Form.Group>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Betalsätt</Card.Title>
                                            <Card.Text>
                                                <Form.Text className="text-muted">
                                                    Välj betalsätt nedan.
                                                </Form.Text>
                                                <hr />
                                                <Payment />
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
                                                            label={`${
                                                                shipping.name
                                                            } ${
                                                                shipping.price
                                                            }:- (Leverans:  ${getDeliveryDate(
                                                                shipping.deliveryTime
                                                            )})`}
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
                                                                    cartItem
                                                                        .product
                                                                        .id
                                                                }
                                                                cartItems={
                                                                    cartItem
                                                                }
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
                                            <h6>
                                                {contextData.getNumOfItems() > 0
                                                    ? momsShipping
                                                    : ""}
                                            </h6>
                                            {contextData.getNumOfItems() > 0
                                                ? confirmButton
                                                : ""}
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </Form>
                        </div>
                    );
                }}
            </CartConsumer>
        );
    }
}
