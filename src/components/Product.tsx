import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './context';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ProductType } from '../data';


interface Props {
    product: ProductType
}

interface State {

}

export default class product extends Component <Props, State> {
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
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

