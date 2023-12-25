import React from 'react';
import { Component } from 'react';
import Democomponent from './05Democomponent';


class ClasscomponentProps extends Component {
   
    render() { 
      
        let user = {
            name : "Rocy",
            age : 20,
            location : "Ahmedabad"
        }

        return (
            <>
            <h1>ClaacomponentProps <br/>
                Proparti of component <br/>
                class compo ki proparti jo dusre compo me use kar sake.    
            </h1>
            {/* <p>{user}</p> */}
            <Democomponent user = {user}/>

            </>
        );
    }
}
 
export default ClasscomponentProps;