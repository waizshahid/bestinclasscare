import React from 'react'; 

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Icon, InlineIcon } from '@iconify/react';
import {Container,Col,Row,Form} from "react-bootstrap"

function Registration()

{
    return (
      <>



<Form>
  <Row>
    <Col>
    <Form.Select  id="form-size"   >
    <option>Default select</option>
  </Form.Select>
      
    </Col>

    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col id="form-size"    >
   
      <   Form.Control         placeholder="Middle name" />
    </Col>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>


    <Col>
    <Form.Select  id="form-size" >
    <option>Default select</option>
  </Form.Select>
    </Col>
  </Row>
</Form>





</>
  );
}

export default Registration;
