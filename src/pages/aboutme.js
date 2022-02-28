import React from 'react'

import Card from "react-bootstrap/Card";
import "./aboutme.css"
import { Col, Row, Button} from "react-bootstrap";

import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


function Aboutme() {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/deeksha-sareen-00a47b199/");
  };
  return (
    

  <div id='container'>
    <div id='left'>
      <Card className = "card" style={{ width: '350px'}}>
          <Row className='no-gutters'style={{ display: 'flex', flexWrap: 'wrap'}} >
          <Col md={9} lg={5} style={{display:'flex'}}>
          <Card.Img className="img-card"  src={require("../images/deeksha.jpg")} />
          </Col>
          {/* <Col>
          <Card.Body>
            <Card.Title style={{textAlign: "left"}} >Hello!!</Card.Title>
            <Card.Text style={{color:'black' , textAlign: "left"}}>
              My name is Deeksha, and I am a software developer. <br/>
              I currently stay in a small town called Halifax in Canada and my birthplace is India. This is my attempt in creating my e-portfolio. I will keep developing it as I learn more. Meanwhile, you can checkout my paintings.
            </Card.Text>
          </Card.Body>
          </Col> */}
          </Row>
        
          <div class="user-info">
            <h4>Deeksha Sareen</h4>
            <span>DOB: 1997/01/25</span> <br/>
            <span>Gender: Female <br/>Education: Master's in Applied Computer Science</span>
          </div>
      </Card> 
    </div>
    <div id='right'>
      <p  style={{color:'black', margin:'10px'}}>  Hello, I am Deeksha <br/> A master's student at Dalhousie University in Atlantic Canada and a developer. Some of the courses that I have taken during my graduate degree include Visual Analytics, Cloud Computing, Advanced Software Development and Machine Learning with Big Data. Currently I have taken up an Advanced Web Development course.
      <br/> <br/>This is my attempt in creating my e-portfolio using my Web Dev concepts. I will keep developing it as I learn more. Meanwhile, you can checkout my paintings.
           </p>

          
      <div style={{textAlign:'center'}}>
        <br/>
        <br/>
        <br/>
          <p style={{color:'black', margin:'10px', textAlign:'center', fontWeight:200}}> My Social Handles</p>
              <SocialIcon url="https://www.linkedin.com/in/deeksha-sareen-00a47b199/" onClick={handleClick}/> &nbsp;

              <SocialIcon url="mailto:deekshasareen97@gmail.com" />&nbsp; 

              <SocialIcon url="https://github.com/DeekshaSareen-code" />&nbsp;
      </div>
  
       
 
    </div>
  
  </div>
  )
}

export default Aboutme