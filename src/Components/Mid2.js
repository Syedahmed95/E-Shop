import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const icons = function(){
    return(
        <Container className="pad Padding1 Mcontainer">
            <Row className=" justify-content-center">
            <Col lg="6">
                <Card className="bg-transparent">
                    <Card.Img className="Iconbox" src="icon.svg"/>
                    <Card.Title className="text-center mt text-white">Free Shipping Worldwide</Card.Title>
                    <Card.Text className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam a ultricies metus. Sed nec molestie.
                    </Card.Text>
                </Card>

                </Col>

                <Col lg="6" className="Colpad">
                <Card className="bg-transparent">
                    <Card.Img className="Iconbox" src="icon2.svg"/>
                    <Card.Title className="text-center mt text-white">24h Fast Support</Card.Title>
                    <Card.Text className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam a ultricies metus. Sed nec molestie.
                    </Card.Text>
                </Card>

                </Col>
                

            </Row>
        </Container>
    )
}

export default icons;
