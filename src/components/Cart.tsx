import React, { Component } from "react";
import NavBar from "./Navbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default class Cart extends Component {
    render() {
        return (
            <Card>
                <Card.Header>
                    <Nav
                        variant="tabs"
                        className="justify-content-center"
                        defaultActiveKey="#first"
                    >
                        <Nav.Item>
                            <Nav.Link href="#first">Kundvagn</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#second">Dina uppgifter</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#third">Fraktsätt</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#forth">Betalsätt</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Din kundvagn</Card.Title>
                    <Card.Text>
                        Här ska produkterna synas om det finns några i
                        kundvagnen
                    </Card.Text>
                    <Button variant="primary">Slutför köp</Button>
                </Card.Body>
            </Card>
        );
    }
}
