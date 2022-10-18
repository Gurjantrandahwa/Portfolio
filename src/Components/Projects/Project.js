import React from "react";
import "./Projects.css";
import {motion} from "framer-motion";
import img from "./ProjectImages/img.png"
import img_1 from "./ProjectImages/img_1.png"
import img_2 from "./ProjectImages/img_2.png"
import img_3 from "./ProjectImages/img_3.png"
import img_4 from "./ProjectImages/img_4.png"
import img_5 from "./ProjectImages/img_5.png"
import img_6 from "./ProjectImages/img_6.png"
import img_7 from "./ProjectImages/img_7.png"

export default function Project() {
    return <motion.div
        id={"projects"}
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className={"projects"}>
        <p className={"projects-header"}>
            Projects
        </p>

        <div className={"projects-container"}>
            {
                [
                    {
                        image: img_6,
                        name: "Netflix Clone",
                        description: "A Netflix clone app that has a Login and Log Out Authentication with firebase. It has a beautiful Home Screen with all movies looking just like Netflix.",
                        link: <a href={"https://netflix-clone-4e2cc.web.app/"}>Visit Netflix Clone</a>
                    },
                    {
                        image: img_1,
                        name: "Tinder Clone",
                        description: "A app which is build with the help of React and MERN technologies.It also have some eye catching animations.",
                        link: <a href={"https://github.com/Gurjantrandahwa/MERN-tinder-clone"}>Visit Tinder Clone</a>
                    },
                    {
                        image:img,
                        name: "Amazon Clone",
                        description: "A React website which has amazon login page with firebase database and checkout page with payment method ",
                        link: <a href={"https://e-clone-b0b92.web.app/"}>Visit Amazon Clone</a>
                    },
                    {
                        image: img_2,
                        name: "Youtube Clone",
                        description: "A responsive React app with search bar and some good looking hover effects on the dashboard ",
                        link: <a href={"https://clone-9b57d.web.app/"}>Visit Youtube Clone</a>
                    },
                    {
                        image: img_3,
                        name: "Twitter Clone",
                        description: "A React twitter app with sidebar with hover effects as well as a home-page where user can add the tweet. ",
                        link: <a href={"https://twitter-clone-94586.web.app/"}>Visit Twitter Clone</a>
                    },
                    {
                        image: img_4,
                        name: "E-commerce Website",
                        description: "A React website which has multiple pages and  user friendly interface with different effects and functionalities.",
                        link: <a href={"https://github.com/Gurjantrandahwa/e-commerce-react"}> Visit E-commerce
                            Website </a>
                    },
                    {
                        image: img_7,
                        name: "Login Page",
                        description: "A MERN login and signIn pages which which has mongo db server as well as eye catching user interface",
                        link: <a href={" https://github.com/Gurjantrandahwa/mern-login-register"}>Visit Login-SignIn
                            app</a>
                    },
                    {
                        image: img_5,
                        name: "Blog App",
                        description: "In this React blog app the user can search and filter the blogs.Also, user can create the blogs and the data is stored in firebase",
                        link: <a href={"https://blog-app-f22d2.web.app/"}>Visit Blog App</a>
                    },


                ].map((value, index) => {
                    return <div key={index}
                                className={"projects-image-wrapper"}>

                        <motion.img
                            initial={{y: -300, opacity: 0}}
                            transition={{duration: 1.2}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            className={"image"}
                            src={value.image} alt={""}/>
                        <h3 className={"header"}>
                        <span>
                            Case Study {index + 1} of {value.length}
                        </span>
                            :{value.name}
                        </h3>
                        <p className={"description"}>
                            {value.description}
                        </p>
                        {value.link}
                    </div>
                })}
        </div>

        <div className={"background"}/>
    </motion.div>
}