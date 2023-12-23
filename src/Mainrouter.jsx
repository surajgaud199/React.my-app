import React, { lazy } from "react";
import { createBrowserRouter } from 'react-router-dom';
import Navbar from "./com-compo/Navbar";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Example from "./Example";
import { Suspense } from "react";
// import Classcompointro from "./Classcompo/Classcompointro";
// import Book from "./Book";
const Book = React.lazy(() =>import('./Book'))
const Classcomporoutes = React.lazy(() => import("./Classcompo/Classcomporoutes"))



const Mainrouter = createBrowserRouter([
   {
     path : "/",
     element : <><Navbar/></>  
   },
   {
    path : "/home",
    element : <><Navbar/><Home/></>
   },
   {
    path : "/about",
    element : <><Navbar/><About/></>
   },
   {
    path : "/product",
    element : <><Navbar/><Product/></>
   },
   {
    path : "/book",
    element : <><Navbar/>
    <Suspense fallback={<h1>Loading</h1>}><Book/></Suspense>
    </>
   },
   {
    path : "/example",
    element : <><Navbar/><Example/></>,
    children : [
      {
        path : "Classcompo/*",
        element : <><Suspense fallback = {<h1>Loading...</h1>}><Classcomporoutes/></Suspense></>
      }
    ]
   },
]);

export default Mainrouter