import React from "react";
import {Container, Card, Row, Col} from "react-bootstrap";

const con = function(){
    return(
        
            <Container className="">
                <Row className="justify-content-center">
                    <Col lg="9" md="9" sm="12">
              
               <Card className="bg-transparent">
                <Card.Img src="head.jpg" alt="Card image" />
                <Card.ImgOverlay>
                <div className="mdiv mdiv1 float-right">
                   <h2 className="text-white text-center font-weight-bold">Amazing Devices</h2>
                   <Card.Text className="text-white text-center">The powerful 50mm neodymium drivers with LMC (Layered Motion Control)
                    diaphragm are pre-tilted to let you hear every note across the entire spectrum at
                    their best. </Card.Text>

                </div>
                {/* <Container className="mdiv">

                </Container> */}
                </Card.ImgOverlay>
                </Card>
                </Col>
                </Row>
            </Container>
        
    )
    }
export default con;