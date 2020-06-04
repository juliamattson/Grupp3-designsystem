import React, { Component } from "react";
import { NavLink, Route, RouteComponentProps } from "react-router-dom";
import {storeProducts} from '../data';
interface Props extends RouteComponentProps<{id: string}>{

}



export default class Details extends Component<Props> {
  render() {
    this.props.match.params.id
    return (
           
                     <div className="Container">
              <div className="ImgContainer">
                <img src={img} alt={title} className="Img" />
              </div>
              <div className="InfoContainer">
                <h1 className="Title">{title}</h1>
                <h3>Made by: {company}</h3>
                <p>
                  <strong>Description: </strong>
                  {info}
                </p>
                <h2>Price: £ {price}</h2>
                <div className="BtnContainer">
                  <NavLink to="/shop">
                    <button className="BackButton">Back to Shop</button>
                  </NavLink>
                  
                </div>
              </div>
            </div>
          );
       
    
  
}
}
