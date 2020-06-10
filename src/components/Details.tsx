import React, { Component } from "react";
import { NavLink, Route, RouteComponentProps } from "react-router-dom";
import { storeProducts } from "../data";
import "./Details.css";
import product from "./Product";

interface Props extends RouteComponentProps<{ id: string }> {}

export default class Details extends Component<Props> {
    render() {
        const foundProduct = storeProducts.find((product) => {
            return product.id == Number(this.props.match.params.id);
        });

        if (foundProduct) {
            return (
                <div className="Container py-5">
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-blue my-5">
                            <div className="ImgContainer">
                                <img
                                    src={"../" + foundProduct.img}
                                    alt={foundProduct.title}
                                    className="Img"
                                />
                            </div>
                            <div className="InfoContainer">
                                <h1 className="Title">{foundProduct.title}</h1>
                                <h3>Märke: {foundProduct.company}</h3>
                                <p>
                                    <strong>Beskrivning: </strong>
                                    {foundProduct.info}
                                </p>
                                <h2>Pris: {foundProduct.price} kr</h2>
                                <div className="BtnContainer">
                                    <NavLink to="/">
                                        <button className="BackButton">
                                            Tillbaka till startsidan
                                        </button>
                                    </NavLink>
                                    <button
                                        disabled={
                                            foundProduct.inCart ? true : false
                                        }
                                        onClick={() => {}}
                                    >
                                        {foundProduct.inCart ? (
                                            <span>in Cart</span>
                                        ) : (
                                            <span>Lägg till i kundvagn</span>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
        }
    }
}
