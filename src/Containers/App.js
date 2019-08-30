import React, {Component} from "react";
import Nav from "../Components/Navbar";
import ImgC from "../Components/Img";
import Card from "../Components/Grid";
import Slide from "../Components/Slide";
import Pro from "../Components/Cat";
import Con from "../Components/Mid";
import Icon from "../Components/Mid2";
import Foot from "../Components/Footer";

class website extends Component{
    constructor(){
      super();
      this.state={
          value:" ",
      }
    }

    render(){
        return(
        <div>
         <Nav/>
         s
         <Slide/>
         
         <Card/>
         <Pro/>
         <Con/>
         <Icon />
         <Foot/>
        </div>
        )
    }
}

export default website;