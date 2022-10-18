import React from "react";
import "./landing.css";
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import img from "../img.png"
import BackgroundCircles from "./BackgroundCircles/BackgroundCircles";


export default function Landing() {
    const [text, count] = useTypewriter({
        words: [`Hi, My name is Gurjant Singh`,
            "A front-end Developer",
            "<WhoLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000,
    });
    return <div className={"home"}>
        <BackgroundCircles/>
        <img
            className={"role-img"}
            src={"https://cdn.sanity.io/images/e9l8wohw/production/3582788262d12eef99934cfa90ffb9408d3804ad-936x2016.jpg?rect=0,22,936,1190"}
            alt={""}/>

        <div className={"index"}>
            <h3 className={"role-text"}>
                Web Developer
            </h3>
            <h1>
                <span className={"mr-3"}>{text}</span>
                <Cursor cursorColor={"#F7AB04"}/>
            </h1>
            <div className={"button-container"}>
                <a href={"#about"}>
                    <button>About</button>
                </a>
                <a href={"#skills"}>
                    <button>Skills</button>
                </a>
                <a href={"#projects"}>
                    <button>Projects</button>
                </a>
            </div>
        </div>


    </div>
}

