import React from "react";
import {motion} from "framer-motion";
import "./backgroundCircles.css"


export default function BackgroundCircles() {
    return <motion.div
        className={"circles"}
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1, 2, 2, 3, 1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"]
        }}
        transition={{
            duration: 3.5,
        }}>

        <div className={"circle4"}/>



    </motion.div>
}