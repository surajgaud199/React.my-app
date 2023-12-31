import React from 'react';

import { Component } from 'react';

class ControlledComponents extends Component {

    constructor(){
        super()
        this.state = {
            name : ""
        }
    }

    Submit = (e) => {
        console.log("submit");
        e.preventDefault()
        console.log(this.state.name);
    }
   
    render() { 
        return ( 
            <>
            <h1>Controlled Components</h1>
            <form onSubmit={this.Submit}>
                <input type='text' value={this.state.name}
                onChange={(e) => this.setState({name: e.target.value})} 
                />
                <input type='submit' value= "savedata"/>
            </form>
            </>
        );
    }
}
 
export default ControlledComponents;