import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" className="navbar">
                <Navbar.Brand href="/">Store</Navbar.Brand>
                <Link to="/" className="nav-link">
                    Products
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Link to="/cart" className="nav-link">
                        <Button>
                            <i className="fas fa-cart-plus"></i>
                            Cart
                        </Button>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
