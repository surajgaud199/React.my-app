import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Test from './Test';
// import reportWebVitals from './reportWebVitals';
import Mainrouter from './Mainrouter';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router ={Mainrouter}>

  </RouterProvider>
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
