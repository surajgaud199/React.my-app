import React, { Component } from "react";
import  {  Outlet, Route, Routes } from "react-router-dom";
import Classcompomenu from "./Classcompomenu";
import Classcompointro from "./Classcompointro";
import Classone from "./01Classone";
import Classtwo from "./02Classtwo";
import Classcomponentjsx from "./03Classcomponentjsx";
import ClasscomponentProps from "./04ClasscomponentProps";

class Classcomporoutes extends Component {
    render(){
        return(
            <>
                <Routes>
                    <Route path="/" element={<Classcompomenu/>}>
                    <Route path="Classcompointro" element = {<Classcompointro/>} />
                    <Route path="Classone" element = {<Classone/>} />
                    <Route path="Classtwo" element = {<Classtwo/>} />
                    <Route path="Classcomponentjsx" element = {< Classcomponentjsx/>} />
                    <Route path="ClasscomponentProps" element = {< ClasscomponentProps/>} />
                    </Route>
                </Routes>
                {/* <Outlet/> */}
            </>
        )
    }
}
export default Classcomporoutes