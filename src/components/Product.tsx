import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './context';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ProductType } from '../data';

interface props {
    product: ProductType
}
interface State {

}




export default class product extends Component<props, State> {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Link to="./Details.tsx">
                                <Card.Img variant="top" src={img} alt="product"
                                    onClick={() => console.log("You clicked me on the image container!")} />
                            </Link>
                            <Button
                             className="cart-btn"
                             disabled={inCart ? true:false}
                             onClick={() => {
                             console.log("Added to cart!!!");
                            }}
                            >
                                {inCart ? (
                                 <p className="text-capitalize mb-0" disabled>
                                {" "}
                                in inCart
                                     </p>
                                ) : (
                                        <i className="fas fa-cart-plus"/>
                                )}
                            </Button>{' '}
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

