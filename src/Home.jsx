import React from "react";
import img from "./img/img-(1).webp";

function Home (){
    return (
    <>
    <h1>Home Page</h1>
    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident quos laborum doloremque est veritatis enim, tempora quas labore omnis, aspernatur eius voluptatem illo aliquam velit. Molestias aperiam similique impedit dolore labore, possimus ad ex iusto? Itaque quam modi aspernatur praesentium reiciendis qui quasi. Amet, voluptas! Expedita eum deserunt incidunt!</p> */}
    <div className="container">
    <img src={img} alt=""/>
    </div>
    </>
    )
}

export default Home