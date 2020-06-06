import React, { Component } from 'react'
import { storeProducts  } from '../data';


const ProductContext = React.createContext({});
//Provider
//Consumer

export default class ProductProvider extends Component {
    state = {
        Products: []
    }
componentDidMount(){
this.setProducts();

}
setProducts = () =>{
let tempProducts:any[] = [];
storeProducts.forEach(item =>{
    const singleItem = { ...item};
    tempProducts = [...tempProducts, singleItem];
});
this.setState(() => {

    return {Products : tempProducts};
});
};



    handleDetail = () => {
        console.log("Hello from detail");

    }
    addToCart = () => {
        console.log("Hello from add to cart");

    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };