import React from "react";
import {Card,Row,Col,Container} from "react-bootstrap";
import {Ob} from "./Testing";
 
const GIRD = function(){
    return(
        <div>
            <Container className="pad">
                <Row>
                    {Ob.map(function(val,i){
                        return(
                    <Col md="3">
                    <Card className=" bg-transparent text-white">
                    <Card.Img className="Cpos" src="cell2.png" alt="Card image" />
                    
                  
                    </Card>

                    <Card.Title className="text-white font-weight-bold">Iphone 6S</Card.Title>
                    
                    </Col>

                        )
                    })}
                    

                </Row>
            </Container>
        </div>
    )
}

export default GIRD;