import React from "react";
import "./Home.css"
import {BsChevronDown} from "react-icons/bs";
import img_1 from "./../../Images/img_1.png";


function Home() {
    return <div className={"home"}>
        <img src={img_1} alt={""} className={"background-img"}/>
        <div className={"home-text"}>
            <h1>Hello! This is Lupus Studio</h1>
            <h2>specializing in landscape, advertorial and conceptual photography</h2>
            <BsChevronDown className={"down-icon"}/>
        </div>
    </div>
}

export default Home