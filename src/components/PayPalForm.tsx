import React from 'react';
import Form from "react-bootstrap/Form";




export default class PayPalForm extends React.Component {
 
  render() {
    return (
     
    <Form.Group>
    <Form.Control placeholder="Paypal Email" type="text" />
    </Form.Group>
       
    )
}


}