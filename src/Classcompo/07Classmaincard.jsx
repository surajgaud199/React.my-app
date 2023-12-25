import React from 'react';
import { Component } from 'react';
import Classcard from './06Classcard';


class Classmaincard extends Component {
   
    render() { 
        return (
            <>
            <div className="row">
                <div className="col-xl-3">
                  <Classcard img= "https://picsum.photos/id/20/300/300" title= "Card-1" btn="card-btn1" text = "lorem" />
                </div>
                <div className="col-xl-3">
                  <Classcard img= "https://picsum.photos/id/30/300/300" title= "Card-2" btn="card-btn2" text = "lorem"/>
                </div>
                <div className="col-xl-3">
                  <Classcard img= "https://picsum.photos/id/50/300/300" title= "Card-3" btn="card-btn3" text = "lorem"/>
                </div>
                <div className="col-xl-3">
                  <Classcard img= "https://picsum.photos/id/230/300/300" title= "Card-4" btn="card-btn4" text = "lorem"/>
                </div>
            </div>
            </>
        );
    }
}
 
export default Classmaincard;