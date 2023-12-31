import React, { createRef } from 'react';

import { Component } from 'react';

class UncontrolledComponents extends Component {

    constructor(){
        super()
        this.input = createRef()
    }
   

    submit = (e) => {
        // return false
        console.log("submit");
        console.log(this.input);
        console.log(this.input.current.value);
        e.preventDefault()
    }
    render() { 
        return (
            <>
            <h1>Uncontrolled Components</h1>
            <form onSubmit={this.submit}>
                <input type="text" ref={this.input}/>
                <input type="submit" value="savedata"/>
            </form>
            </>
        );
    }
}
 
export default UncontrolledComponents;