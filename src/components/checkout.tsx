import React, {Component} from 'react';
import { Switch,Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart';
import Default from './Default';
import Button from 'react-bootstrap/Button';

function checkout() {
    return (
      <React.Fragment>
  
       <Navbar />
       <Switch>
        <Route path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/details" component={Details} />
       </Switch>
       <Details />
       <Cart />
       <Default />
       <Button>Hej</Button>
      
  
  
      </React.Fragment>
    );
  }
  
  export default checkout;