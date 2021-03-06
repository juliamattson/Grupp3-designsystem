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
        } else {
            let foundCartItem: any = clonedCart.find(
                (cartItem: { product: ProductType; quantity: number }) => {
                    if (cartItem.product.id === product.id) {
                        return cartItem;
                    }
                }
            );
            if (foundCartItem != undefined) {
                foundCartItem.quantity += 1;
            }
        }

        this.setState({ cartItems: clonedCart }, () => {
            console.log(this.state);
        });
    };

    removeProductFromCart = (product: ProductType) => {
        let clonedCart = Object.assign([], this.state.cartItems);

        let foundCartItem: any = clonedCart.find(
            (cartItem: { product: ProductType; quantity: number }) => {
                if (cartItem.product.id === product.id) {
                    return cartItem;
                }
            }
        );
        if (foundCartItem.quantity > 1) {
            foundCartItem.quantity -= 1;
        } else {
            clonedCart = clonedCart.filter(
                (cartItem: { product: ProductType; quantity: number }) =>
                    cartItem.product.id != product.id
            );
        }

        this.setState({ cartItems: clonedCart }, () => {
            console.log(this.state);
        });
    };

    getCartTotal = () => {
        let clonedCart = Object.assign([], this.state.cartItems);
        let cartTotal = 0;

        clonedCart.forEach(
            (cartItem: { product: ProductType; quantity: number }) => {
                cartTotal += cartItem.product.price * cartItem.quantity;
            }
        );
        return cartTotal;
    };

    getNumOfItems = () => {
        let clonedCart = Object.assign([], this.state.cartItems);
        let numOfItems = 0;

        clonedCart.forEach(
            (cartItem: { product: ProductType; quantity: number }) => {
                numOfItems += cartItem.quantity;
            }
        );
        return numOfItems;
    };

    deleteProductsFromCart = () => {
        let clonedCart = Object.assign([], this.state.cartItems);

        clonedCart = [];

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
                    removeProductFromCart: this.removeProductFromCart,
                    deleteProductsFromCart: this.deleteProductsFromCart,
                    getCartTotal: this.getCartTotal,
                    getNumOfItems: this.getNumOfItems,
                }}
            >
                {this.props.children}
            </CartContext.Provider>
        );
    }
}
