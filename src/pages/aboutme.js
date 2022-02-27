import React from 'react'

import Card from "react-bootstrap/Card";
import "./aboutme.css"
import { Col, Container, Row} from "react-bootstrap";

function Aboutme() {
  return (
    
  <Container fluid className="text-center">
    <Card style={{ width: '700px' ,textAlign:'center' ,margin:'10rem',marginLeft:'20rem'}}>
        <Row className='no-gutters'style={{ display: 'flex', flexWrap: 'wrap'}} >
        <Col md={9} lg={5} >
        <Card.Img variant="top" src={require("../images/deeksha.jpg")} />
        </Col>
        <Col>
        <Card.Body>
          <Card.Title style={{textAlign: "left"}} >Hello!!</Card.Title>
          <Card.Text style={{color:'black' , textAlign: "left"}}>
            My name is Deeksha, and I am a software developer. <br/>
            I currently stay in a small town called Halifax in Canada and my birthplace is India. This is my attempt in creating my e-portfolio. I will keep developing it as I learn more. Meanwhile, you can checkout my paintings.
          </Card.Text>
        </Card.Body>
        </Col>
        </Row>
    </Card>
  </Container>
  )
}

export default Aboutme