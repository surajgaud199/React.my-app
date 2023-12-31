import React, { Component } from "react";
import  {  Outlet, Route, Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./Classcompointro";
import Classone from "./01Classone";
import Classtwo from "./02Classtwo";
import Classcomponentjsx from "./03Classcomponentjsx";
import ClasscomponentProps from "./04ClasscomponentProps";
// import Classcard from "./06Classcard";
import Classmaincard from "./07Classmaincard";
import Classcomponentstate from "./08Classcomponentstate";
import Classcomponentconditionalrendering from "./09Classcomponenetconditional renderimg";
import UncontrolledComponents from "./10Uncontrolled Components";
import ControlledComponents from "./11ControlledComponents";
import Listandkeys from "./12Listandkeys";


class Classcomporoutes extends Component {
    render(){
        return(
            <>
                <Routes>
                    <Route path="/" element={<Classcompomenu/>}>
                    <Route path="Classcompointro" element = {<Classcompointro/>} />
                    <Route path="Classone" element = {<Classone/>} />
                    <Route path="Classtwo" element = {<Classtwo/>} />
                    <Route path="Classcomponentjsx" element = {<Classcomponentjsx/>} />
                    <Route path="ClasscomponentProps" element = {<ClasscomponentProps/>} />
                    <Route path="Classmaincard" element = {<Classmaincard/>} />
                    <Route path="Classcomponentstate" element = {<Classcomponentstate/>} />
                    <Route path="Classcomponentconditionalrendering" element = {<Classcomponentconditionalrendering/>} />
                    <Route path="UncontrolledComponents" element = {<UncontrolledComponents/>} />
                    <Route path="ControlledComponents" element = {<ControlledComponents/>} />
                    <Route path="Listandkeys" element = {<Listandkeys/>} />
                    </Route>
                </Routes>
                {/* <Outlet/> */}
            </>
        )
    }
}
export default Classcomporoutes