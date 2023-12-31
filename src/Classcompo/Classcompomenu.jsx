import React,{ Component } from "react";
import { Link, Outlet } from "react-router-dom";

class Classcompomenu extends Component {
    render(){
        return (
          <>
                <ul>
                  <li><Link to="Classcompointro">Classcompointro</Link></li>
                  <li><Link to="Classone">Classone</Link></li>
                  <li><Link to="Classtwo">Classtwo</Link></li>
                  <li><Link to="Classcomponentjsx">Classcomponentjsx</Link></li>
                  <li><Link to="ClasscomponentProps">ClasscomponentProps</Link></li>
                  {/* <li><Link to="Classcard">Classcard</Link></li> */}
                  <li><Link to="Classmaincard">Classmaincard</Link></li>
                  <li><Link to="Classcomponentstate">Classcomponentstate</Link></li>
                  <li><Link to="Classcomponentconditionalrendering">Classcomponentconditionalrendering</Link></li>
                  <li><Link to="UncontrolledComponents">UncontrolledComponents</Link></li>
                  <li><Link to="ControlledComponents">ControlledComponents</Link></li>
                  <li><Link to="Listandkeys">Listandkeys</Link></li>
                </ul>
               <Outlet/>
          </>
        )    
    }
}
export default Classcompomenu