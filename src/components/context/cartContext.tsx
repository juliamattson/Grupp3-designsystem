import React, { createContext, Component } from "react";
import { ProviderState } from "./cartProvider";
import { ProductType } from "../../data";

export interface ContextState extends ProviderState {
    addProductToCart: (product: ProductType) => void;
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
});

export const CartConsumer = CartContext.Consumer;
