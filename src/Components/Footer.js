import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

var year= new Date();
const year1 = year.getFullYear();

const foot=function(){
    return(
        <Container fluid className="mt">
            <Row>
                <Col className="pc">
                <Card className="bg-transparent">
                    <Card.Img className="fpic" src="foot.png"></Card.Img>
                    <Card.ImgOverlay>
                        <Card.Text className="text-center text-white">Copyright ©{year1}, Example Corporation</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </Col>
            </Row>
            
        </Container>
    )
}

export default foot;