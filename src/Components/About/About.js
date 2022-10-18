import React from "react";
import "./About.css";
import {motion} from "framer-motion";


export default function About() {
    return <motion.div
        initial={{opacity: 0}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1}}
        className={"about"}
        id="about">
        <p className={"about-header"}>
            About
        </p>
        <div className={"about-background"}>
            
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                className={"about-img"}
                src={"https://cdn.sanity.io/images/e9l8wohw/production/bfcf365897b86f9751e8fc3aa30c53e1116b55df-708x1596.jpg?rect=0,0,708,1111"}
                alt={""}/>

            <div className={"about-background-text"}>
                <h2>
                    Here is a{" "}<span className={"underline-text"}>little</span> background
                </h2>
                <p>
                    Hello! I'm Gurjant Singh, a Front-End Web Developer.
                    I am very passionate about coding so,
                    I started a new journey to build creative design to make eye-catching,
                    accessible, user-friendly websites and applications.
                    Well-organised person,interested in the entire frontend spectrum and working
                    on ambitious projects with positive people.I spend my time on personal projects
                    for learning new skills.
                </p>
            </div>
        </div>

    </motion.div>
}