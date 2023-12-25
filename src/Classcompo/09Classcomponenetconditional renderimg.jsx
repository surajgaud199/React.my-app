import React from 'react';

import { Component } from 'react';

class Classcomponentconditionalrendering extends Component {
     

    constructor(){
        super()
        this.state = {
            islogin : true
        }
    }
    render() { 
        // return (
        //     <>
        //     <h1>conditional rendring</h1>
        //     <p>welcome tops</p>
        //     <p>welcome guest</p>
        //     </>
        // );
      //1  // if(this.state.islogin){
        //     return <p>welcome tops</p>
        // }
        // else{
        //     return <p>welcome guest</p>
        // } 

      //2
    //   let msg 
    //   if (this.state.islogin)  {
    //     msg = <p>welcome tops</p>
    //   }
    //   else{
    //     msg = <p>welcome guest</p>
    //   }
    //   return msg

    //3
     
    // return this.state.islogin ? <p>welcome tops</p> : <p>welcome guest</p>
 //4
   
      return this.state.islogin && <p>welcome tops</p>

    }
}
 
export default Classcomponentconditionalrendering;