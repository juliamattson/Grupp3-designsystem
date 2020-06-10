import React, { createContext, Component } from "react";
import { ProviderState } from "./cartProvider";
import { ProductType } from "../../data";

export interface ContextState extends ProviderState {
    addProductToCart: (product: ProductType) => void;
    removeProductFromCart: (product: ProductType) => void;
    getCartTotal: () => number;
    getNumOfItems: () => number;
}

export const CartContext = createContext<ContextState>({
    cartItems: [],
    addProductToCart: (product: ProductType) => {
        console.log(
            "Something went wrong with adding " +
                product.title +
                " to the cart..."
        );
    },
    removeProductFromCart: (product: ProductType) => {
        console.log(
            "Something went wrong with removing " +
                product.title +
                " from the cart..."
        );
    },
    getCartTotal: () => {
        return 0;
    },
    getNumOfItems: () => {
        return 0;
    },
});

export const CartConsumer = CartContext.Consumer;
