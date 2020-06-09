import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" className="navbar">
                <Navbar.Brand href="/">PhoneStore</Navbar.Brand>
                <Link to="/" className="nav-link">
                    Produkter
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Link to="/cart" className="nav-link">
                        <Button>
                            <i className="fas fa-cart-plus"></i> Kundvagn
                        </Button>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
