import React, { useState } from 'react';
import {Row, Col, Container, Button, Jumbotron} from 'react-bootstrap'
import './Product.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//npm install --save react react-dom
//  npm install typescript@3.8   
//  npm install react-bootstrap@1.0.1 --save 
//with css added, I should be able to use xs, and other stuff, might have to adjust things, again,
//buttons will probably work as well.

//I want to split the column. Where you ahve the article name and genre. ANd buttons think.
// {----Title----} {Starting line or something about the topic and relevan tags. Title stretches.}
// { Buttons and tags would go here ---------------need to be below.+--------------------------------}
//we make the udnerbar a seperate row, and we make it smol

export default function Homepage() {
  return(
    
    <Container >


    <Jumbotron fluid>
      <h1 className="h1"> The Platform </h1>
    </Jumbotron>
    
    
    <Container>
            <Row className="headerHome">
                    <Col className="searchBar" > Search🍫 _______________________________ 🐉</Col>
                    <Col className="profileBar" > 😉 🧑‍💻 </Col>
            </Row>   

            <Row className="justify-content-md-center">
                <button type="button" className="btn btn-primary btn-lg ">POPULAR</button>
                <button type="button" className="btn btn-primary btn-lg">NEW</button>
            </Row>

    </Container >

            <Row className="articleImg">
                    <Col className="articleTitle" > HELLO THIS IS A GENERAL ARTICLE TEST </Col>
            </Row>    

            <Row className="justify-content-md-center">
                <Col className="articleButtonBanner">
                    <Button variant="primary">Tag1</Button>{' '}
                </Col>  
                <Col className="articleButtonBanner">
                    <Button variant="primary">Tag1</Button>{' '}
                </Col>
                <Col className="articleButtonBanner">
                    <Button variant="primary">Tag1</Button>{' '}
                </Col>
                <Col className="articleButtonBanner">
                    <Button variant="primary">Tag1</Button>{' '}
                </Col>
                <Col className="articleButtonBanner">
                    <Button variant="primary">Tag1</Button>{' '}
                </Col>           
            </Row>  
           



            <footer>
                    <p>Author:</p>
                        <p><a href="@example.com">hege@example.com</a></p>
                    </footer>             
    </Container>


  )
}
