import React from "react";
import {Carousel, Container, Row, Col} from "react-bootstrap";

var slide=function(){
    return(
        <div>
        <Container className="slide1">
            <Row className="justify-content-md-center">
                <Col >
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 bod"
      src="pc.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 bod"
      src="pc.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default slide;