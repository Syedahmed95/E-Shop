import React, {Component} from "react";
import {Card,Row,Col,Button,Container, CardColumns, CardDeck} from "react-bootstrap";
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
            // <div>
                
            //     <Container>
        
            //     <Row>
                        
            //     {Ob.map(function(val){
            //     return(
                
            //     <Col xs lg="6">
            //     <Card className=" pad bg-dark text-white">
            //     <Card.Img src={val.img} alt="Card image" />
            //     <Card.ImgOverlay>
            //     <Card.Title>Card title</Card.Title>
            //     <Button variant="danger">Click here!</Button>
            //     <div className="textB">
            //     <Container>
            //     <Card.Text className="textc">
            //     {val.Text}
            //     </Card.Text>
            //     </Container>
            //     </div>
                                                 
            //     </Card.ImgOverlay>
            //     </Card>
            //     </Col>
            //            )})
            //     }
                                        
            //     </Row>
            //     </Container>
                        
                
            // </div>

            // <div>
            //     <Container className="d-flex flex-row flex-column" >
            //         <Row className="">
            //         <Col lg="7" sm="6">
            //         <Container>
            //     <Card className="pad bl bg-dark text-white">
            //     <Card.Img src="pc.jpg" alt="Card image" />
            //     <Card.ImgOverlay>
            //     <Card.Title>Card title</Card.Title>
            //     <Button variant="danger">Click here!</Button>
            //     <div className="textB">
            //     <Container>
            //     <Card.Text className="textc">
            //     "asdasdasdas"
            //     </Card.Text>
            //     </Container>
            //     </div>
                                                 
            //      </Card.ImgOverlay>
            //      </Card>
            //      </Container>
            //      </Col>
                
            //     <Col lg="4" sm="3" className="">
            //     <Container className="">
            //     <Card className="bl pad bg-secondary text-white h-100">
            //     <Card.Img className="img-responsive" src="cell2.png" alt="Card image" />
            //     <Card.ImgOverlay>
            //     <Card.Title>Cell Phones!</Card.Title>
            //     <Button variant="danger" className="textB">Click here!</Button>
            //     <div className="textB">
            //     <Container>
            //     <Card.Text className="textc">
            //     "asdasdasdas"
            //     </Card.Text>
            //     </Container>
            //     </div>
                                                 
            //      </Card.ImgOverlay>
            //      </Card>
            //      </Container>
            //      </Col>
                 
            //      </Row>
            //     </Container>
            // </div>

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