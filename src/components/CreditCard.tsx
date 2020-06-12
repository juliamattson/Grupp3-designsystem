import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export class creditCard extends Component {
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        this.setState(
            {
                ...this.state,
                [name]: value,
            },
            () => {
                console.log(this.state);
            }
        );
    };
    render() {
        return (
            <Form.Group>
                <Form.Control required placeholder="Card Holder" type="text" />
                <Form.Control
                    required
                    placeholder="Card Number"
                    name="cardNumber"
                    onChange={this.handleChange}
                />
                <Form.Control required placeholder="Expires" type="month" />
                <Form.Control required placeholder="CVC/CVV" />
            </Form.Group>
        );
    }
}

export default creditCard;
