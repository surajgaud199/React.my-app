import React from 'react';

import { Component } from 'react';

class Listandkeys extends Component {

    constructor(){
        super()
        this.state = {
            item : [1,2,3,4,5]
        }
    }

    additem = () => {
        console.log("additem");
        this.setState({
            item : [6,7,1,2,3,4,5]
        })
    }
   
    render() { 
        // let data =  [1,2,3,4,5]
        let items = this.state.item.map((value,index) => <li key={value.toString()}>{value}</li>)
        return (
            <>
            <h1>Listandkeys</h1>
            {/* <li>{data[0]}</li>
            <li>{data[1]}</li>
            <li>{data[2]}</li>
            <li>{data[3]}</li> */}
            <ul>
                <li>{items}</li>
            </ul>
            <button onClick={this.additem}>add items</button>
            </>
        );
    }
}
 
export default Listandkeys;