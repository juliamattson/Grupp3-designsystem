import React from "react";
import Form from "react-bootstrap/Form";

export default class SwishForm extends React.Component {
    render() {
        return (
            <Form.Group>
                <Form.Control required placeholder="Telefon" type="text" />
            </Form.Group>
        );
    }
}
