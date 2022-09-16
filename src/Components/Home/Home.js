import React from "react";
import "./Home.css"
import {BsChevronDown} from "react-icons/bs";
import img_1 from "./../../Images/img_1.png";
import AnimatedText from "react-animated-text-content";


function Home() {
    return <div className={"home"} id={"home"}>
        <img src={img_1} alt={""} className={"background-img"}/>
        <div className={"home-text"}>
            <AnimatedText
                type="words"
                animation={{
                    x: '-200px',
                    y: '20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                }}
                animationType="float"
                interval={0.06}
                duration={3}
                tag="h1"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
            >
                Hello! This is Gurjant Singh
            </AnimatedText>
            <AnimatedText
                type="words"
                animation={{
                    x: '-200px',
                    y: '20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                }}
                animationType="float"
                interval={0.06}
                duration={3}
                tag="h2"
                includeWhiteSpaces
                threshold={0.1}
                rootMargin="20%"
            >
                front-end web developer, I design and build User Interface.
            </AnimatedText>
        </div>
        <BsChevronDown className={"down-icon"} onClick={()=>{
            window.scrollTo(0,700)
        }}/>
    </div>
}

export default Home