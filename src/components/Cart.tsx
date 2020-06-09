import React, { Component } from 'react'
import NavBar from './Navbar';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "./cart.css";
import CardGroup from 'react-bootstrap/CardGroup'

export default class Cart extends Component<{}, { value: string }> {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return (
          <div id="cartStyling">
          <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Dina uppgifter</Card.Title>
              <Form onSubmit={this.handleSubmit}>
              <Form.Text className="text-muted">
                  Fyll i dina uppgifter nedan.
                </Form.Text>
                <hr/>
              <Form.Group controlId="formBasicName">
                <Form.Control autoComplete="on" type="text" value={this.state.value} onChange={this.handleChange} placeholder="För och efternamn" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control autoComplete="on" type="email"   placeholder="Email-adress" />
              </Form.Group>
              <Form.Group controlId="formBasicNumber">
                <Form.Control autoComplete="on" type="text"   placeholder="Telefonnummer" />
              </Form.Group>
              <Form.Group controlId="formBasicAdress">
                <Form.Control autoComplete="on" type="text"   placeholder="Adress" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Spara
              </Button>
            </Form>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Betalsätt</Card.Title>
              <Card.Text>
                Här ska info och alternativ av betalsätt finnas
                <Form >
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check
                                                type="radio"
                                                label="kort "
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Swish "
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                                
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="Pay Pal"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios3"
                                            />


                                        </div>
                                    ))}
                                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Fraktsätt</Card.Title>
              <Card.Text>
                Här ska info och alternativ av fraktsätt finnas
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <Card>
        <Card.Body>
          <Card.Title>Kundvagn</Card.Title>
          <Card.Text>
            Om det finns några produkter i kundvagnen ska de visas här.
          </Card.Text>
          <Button  variant="primary">Slutför köp</Button>
        </Card.Body>
        </Card>
        </div>
         
        )
    }
}
