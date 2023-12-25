import React from 'react';

import { Component } from "react";


class Classcomponentjsx extends Component {
    
    render() { 
        let user = "My Name Is Raj"
        return (
            <>
            <h1> kabhi bhi kisi veriable ya function ko call karvana ho to karlibrecet ka use hota hai use <u>jsx</u> kahte hai...Ok...🤷‍♂️</h1>
            <h1>{user.toLocaleLowerCase()}</h1>
            </>
        )
    }
}
 
export default Classcomponentjsx