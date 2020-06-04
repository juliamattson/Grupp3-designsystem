import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";
import ProductList from "./ProductList";
import Details from "./Details";
import Cart from "./Cart";
import Default from "./Default";

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Switch>
                <Route exact path="/" component={ProductList} />
                <Route path="/details/:id" component={Details} />
                <Route path="/cart" component={Cart} />
                <Route component={Default} />
            </Switch>
        </React.Fragment>
    );
}

export default App;
