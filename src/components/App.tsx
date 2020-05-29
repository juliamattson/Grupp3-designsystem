import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart';
import Default from './Default';
import Button from 'react-bootstrap/Button';






function App() {
  return (
    <React.Fragment>

     <Navbar />
     <ProductList />
     <Details />
     <Cart />
     <Default />
     <Button>Click me!</Button>


    </React.Fragment>
  );
}

export default App;
