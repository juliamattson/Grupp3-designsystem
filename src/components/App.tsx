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






function App() {
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


    </React.Fragment>
  );
}

export default App;
