import React, {Component} from 'react';
import Form from "react-bootstrap/Form";


export  class creditCard extends Component  {
   
    handleChange=(  e: React.ChangeEvent<HTMLInputElement>)=> {
        const { name, value } = e.currentTarget;
        this.setState({
           
             ...this.state,
             [ name]: value
          
          }, ()=>{console.log(this.state)});  
    };
    render() {
        return (
        <Form.Group  >
        <Form.Control 
         placeholder="Card Holder"
         type="text"
            />
            <Form.Control 
          placeholder="Card Number"
          name='cardNumber' 
          onChange={this.handleChange}
              />
           <Form.Control 
         placeholder="Expires"
         type="month"
         defaultValue="2020-05" 
            />
        <Form.Control 
         placeholder="CVC/CVV"
         defaultValue="000" 
           />
                
              </Form.Group>
        )
    }
}





export default creditCard;