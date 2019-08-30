import React, {Component} from "react";
import {Card,Row,Col,Button,Container} from "react-bootstrap";
import {Ob} from "./Testing";

class gird1 extends Component{
    constructor(){
        super()
        this.state={
            data:[],
            data1:Ob

        }
        
    }
    
    componentDidMount(){
        this.setState({data:Ob})
        
    }
    render(){
        
        return(
           
           <div>
               <Container className="pad d-flex flex-lg-row flex-column align-items-start justify-content-between">
                   <Row>
                       <Col md="8">
                       <Card className="h-100 bl bg-dark text-white">
                        <Card.Img src="pc.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className="font-weight-bold">Computer Components</Card.Title>
                            <Button variant="danger">Click here!</Button>
                            
                        </Card.ImgOverlay>
                        </Card>
                       </Col>
                       <Col md="4">
                           <div className="P2">
                       <Card className="h-100 bg-dark text-white">
                        <Card.Img src="cell2.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title className="font-weight-bold">Cell Phones!</Card.Title>
                            <Card.Text >
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            
                        </Card.ImgOverlay>
                        </Card>
                        </div>
                       </Col>
                   </Row>
               </Container>
           </div>
           

        
        )
    }
}

// export default grid;
export default gird1;