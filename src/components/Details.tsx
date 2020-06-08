import React, { Component } from "react";
import { NavLink, Route, RouteComponentProps } from "react-router-dom";
import { storeProducts } from "../data";
import product from "./Product";
interface Props extends RouteComponentProps<{ id: string }> {}

export default class Details extends Component<Props> {
    render() {
        this.props.match.params.id;

        const foundProduct = storeProducts.find((product) => {
            return product.id == Number(this.props.match.params.id);
        });

        if (foundProduct) {
            return (
                <div className="Container">
                    <div className="ImgContainer">
                        <img
                            src={foundProduct.img}
                            alt={foundProduct.title}
                            className="Img"
                        />
                    </div>
                    <div className="InfoContainer">
                        <h1 className="Title">{foundProduct.title}</h1>
                        <h3>Made by: {foundProduct.company}</h3>
                        <p>
                            <strong>Description: </strong>
                            {foundProduct.info}
                        </p>
                        <h2>Price: £ {foundProduct.price}</h2>
                        <div className="BtnContainer">
                            <NavLink to="/shop">
                                <button className="BackButton">
                                    Back to Shop
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <h1>Nothing Here</h1>;
        }
    }
}
