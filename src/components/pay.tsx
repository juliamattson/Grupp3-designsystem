import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import CreditCard from './CreditCard';
import PayPalForm from './PayPalForm';
import SwishForm from './SwishForm';

export default class Payment extends Component {
    state = { selected: "" };
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ selected: e.target.value });
    };
    render() {
       
      const { selected } = this.state;
      return (
          
        <Form.Group  >
            
          <Form.Check checked={selected =='CreditCard'} value="CreditCard" type="radio" label="CreditCard" onChange={this.handleChange}/>
             {this.state.selected === 'CreditCard' && <CreditCard/>}


             <Form.Check checked={selected =='swish'} value="swish" type="radio" label="Swish" onChange={this.handleChange}/>
            {this.state.selected === 'swish' && <SwishForm/>}



            <Form.Check checked={selected =='PayPal'} value="PayPal" type="radio" label="PayPal" onChange={this.handleChange}
            />
            {this.state.selected === 'PayPal' && <PayPalForm/>}
           
        </Form.Group>
      
       
      );
    }
  }


