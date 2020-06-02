import React from 'react';
import { Row,Col } from 'react-bootstrap';

interface Props {
  name:string
  title:string
  
}
export default function Title(props:Props) {
    return (
       
        <Row>
        <Col className="col-10 mx-auto my-2 text-center text-title">
            
                    <h1 className="text-capitalize font-weight-bold"> 
                     {props.name}<strong className="text-blue">{props.title}</strong>
                        </h1>
        </Col>
    
      </Row>



)
}
