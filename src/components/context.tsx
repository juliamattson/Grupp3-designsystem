import React, { Component } from "react";
import { storeProducts, ProductType } from "../data";
import Product from "./Product";

const ProductContext = React.createContext({});

interface Props {}

export interface State {
    cartItems: {
        product: ProductType;
        quantity: number;
    }[];
}

export default class ProductProvider extends Component<Props, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            cartItems: [],
            /* Products: [] */
        };
    }

    /* componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts: any[] = [];
        storeProducts.forEach((item) => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return { Products: tempProducts };
        });
    }; */

    handleDetail = () => {
        console.log("Hello from detail");
    };
    addToCart = (product: ProductType) => {
        console.log("Hello from add to cart");
        /* const clonedCart = Object.assign([], this.state.cartItems);
        clonedCart.push(product);
        this.setState({ cartItems: clonedCart }, () => {
            console.log(this.state);
        }); */
    };
    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
