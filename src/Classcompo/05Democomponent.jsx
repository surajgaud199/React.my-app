import React from 'react';

import { Component } from 'react';


class Democomponent extends Component {
   
    render() { 
        return ( 
            <>
            <h1><b>(kuchh nya hai ...)</b><i>Demo</i></h1>
            <p>{this.props.user.name}</p>
            <p>{this.props.user.age}</p>
            <p>{this.props.user.location}</p>
            </>
        );
    }
}
 
export default Democomponent;