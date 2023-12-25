import React from 'react';
import { Component } from 'react';


class Classcomponentstate extends Component {

    constructor(){
        super()
        this.state = {
            count : 10,
            data : "sunil"
        }
    }
    update = () => {
        console.log("update",this.state.count );
        this.setState({count : this.state.count + 1})
        this.setState({data : this.state.data = "anil"})
    }
    decrement = () => {
        this.setState({count : this.state.count -1})
    }
    render() { 
        // let data = 0
        let data = {
            name : "sameer",
            age : 25
        }
        return (

         <>
         <p> steta object hai jiske andar us component ka data ya informetion stor karva sakte ho jo informion ya date aap run time par cheng karva sakte o hai state jo hmesa constructor ke andar coll hoga .<i> built in object jo date ko cantent karega informesan ko stor krega.</i> <b> The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the </b>run time ke upar cheng karsakte ko yesa ek pairamitar jiska name hai steta jo all constructor ke andar coll hogi</p>
         <h1>State</h1>
         {/* <p>{data.name}</p>
         <p>{data.age}</p> */}
         <h2>{this.state.count}</h2>
         <h2>{this.state.data}</h2>
         <button onClick={this.update}>Update state</button>
         <button onClick={this.decrement}>-</button>
         </>

        );
    }
}
 
export default Classcomponentstate;