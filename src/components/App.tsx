import React from 'react';
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
     <ProductList />
     <Details />
     <Cart />
     <Default />


    </React.Fragment>
  );
}

export default App;
