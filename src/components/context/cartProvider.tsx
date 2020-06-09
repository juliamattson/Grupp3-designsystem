import React, { Component } from "react";
import { CartContext } from "./cartContext";
import { ProductType } from "../../data";

export interface ProviderState {
    cartItems: {
        product: ProductType;
        quantity: number;
    }[];
}

export class CartProvider extends Component<{}, ProviderState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            cartItems: [],
        };
    }

    addProductToCart = (product: ProductType) => {
        const clonedCart = Object.assign([], this.state.cartItems);

        let foundItemId = clonedCart.find(
            (cartItem: { product: ProductType; quantity: number }) => {
                return cartItem.product.id === product.id;
            }
        );

        if (foundItemId === undefined) {
            console.log("Nothing found");
            const newCartItem = { product: product, quantity: 1 };

            clonedCart.push(newCartItem);
        }

        this.setState({ cartItems: clonedCart }, () => {
            console.log(this.state);
        });
    };

    render() {
        return (
            <CartContext.Provider
                value={{
                    ...this.state,
                    addProductToCart: this.addProductToCart,
                }}
            >
                {this.props.children}
            </CartContext.Provider>
        );
    }
}
