import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
import { Component } from 'react'


class Classcard extends Component {
  
    render() {
        return (
            <>

            {/* <h1>Card</h1> */}
            {/* <div className="row"> */}
                {/* <div className="col-xl-3"> */}
                <MDBCard>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                        <MDBCardImage src= {this.props.img} fluid alt='...' />
                           <a>
                             <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                           </a>
                    </MDBRipple>
                  <MDBCardBody>
                        <MDBCardTitle>{this.props.title}</MDBCardTitle>
                      <MDBCardText>
                          {this.props.text}
                      </MDBCardText>
                    <MDBBtn href='#'>{this.props.btn}</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
                {/* </div> */}
            {/* </div> */}
            </>
        );
    }
}
 
export default Classcard;