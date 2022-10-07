import React from "react";
import "./About.css";
import {TbBrandTinder} from "react-icons/tb";
import {CgWebsite} from "react-icons/cg";
import {AiOutlineAmazon, AiOutlineLogin, AiOutlineYoutube} from "react-icons/ai";
import {FiTwitter} from "react-icons/fi";
import {TiWeatherPartlySunny} from "react-icons/ti";
import {RiNetflixFill, RiTodoLine} from "react-icons/ri";
import {FaBlog} from "react-icons/fa";
import img from "../../Images/img.png";

export default function About() {
    return <div className={"about"} id="about">
        <div className={"about-detail"}>
            <div>
                <h2>Who is Behind All this </h2>
                <h3>
                    Hello! I'm Gurjant Singh, a Front-End Web Developer with Html,CSS,React.js
                    and Javascript.I love to build creative design to make eye-catching,accessible,
                    user-friendly websites and applications.
                </h3>

                <p>
                    Well-organised person,interested in the entire frontend spectrum and working on ambitious projects
                    with positive people.
                </p>
                <p>I spend my time on personal projects and learning more about HTML, CSS, React.js and
                    Javascript.<br/>
                    Here are a few past design projects I've worked on :</p>
            </div>

            <img src={img} alt={""}/>

        </div>
        <div className={"projects-wrapper"}>
            <h2>My Projects</h2>
            {
                [   {
                    icon: <RiNetflixFill/>,
                    header: "Netflix Clone",
                    text: "A app which is build with the firebase and React.In this signIn and signUp method with good looking UI.",
                    link: <a href={" https://netflix-clone-4e2cc.web.app/"}>Visit Netflix Clone</a>
                },

                    {
                        icon: <TbBrandTinder/>,
                        header: "Tinder Clone",
                        text: "A app which is build with the help of React and MERN technologies.It also have some eye catching animations.",
                        link: <a href={"https://github.com/Gurjantrandahwa/MERN-tinder-clone"}>Visit Tinder Clone</a>
                    },
                    {
                        icon: <AiOutlineAmazon/>,
                        header: "Amazon Clone",
                        text: "A React website which has amazon login page with firebase database and checkout page with payment method ",
                        link: <a href={"https://e-clone-b0b92.web.app/"}>Visit Amazon Clone</a>
                    },
                    {
                        icon: <AiOutlineYoutube/>,
                        header: "Youtube Clone",
                        text: "A responsive React app with search bar and some good looking hover effects on the dashboard. ",
                        link: <a href={"https://clone-9b57d.web.app/"}>Visit Youtube Clone</a>
                    },
                    {
                        icon: <FiTwitter/>,
                        header: "Twitter Clone",
                        text: "A React twitter app with sidebar with hover effects as well as a home-page where user can add the tweet.  ",
                        link: <a href={"https://twitter-clone-94586.web.app/"}>Visit Twitter Clone</a>
                    },
                    {
                        icon: <CgWebsite/>,
                        header: "E-commerce Website",
                        text: "A React website which has multiple pages and good looking user interface with different effects and functionalities.",
                        link: <a href={"https://github.com/Gurjantrandahwa/e-commerce-react"}>
                            Visit E-commerce Website
                        </a>
                    },
                    {
                        icon: <AiOutlineLogin/>,
                        header: "Login Page",
                        text: "A MERN login and signIn pages which which has mongo db server as well as eye catching user interface   ",
                        link: <a href={" https://github.com/Gurjantrandahwa/mern-login-register"}>Visit Login-SignIn
                            app</a>
                    },
                    {
                        icon: <TiWeatherPartlySunny/>,
                        header: "Weather App",
                        text: "In this app user can see the temperature of their city and the data coming from an api.It is also have wave animations",
                        link: <a href={"https://github.com/Gurjantrandahwa/Weather-React-App"}>Visit Weather App</a>
                    },
                    {
                        icon: <FaBlog/>,
                        header: "Blog App",
                        text: "  In this React blog app the user can search and filter the blogs.Also, user can create the blogs and the data is stored in firebase.",
                        link: <a href={"https://blog-app-f22d2.web.app/"}>Visit Blog App</a>
                    },

                    {
                        icon: <RiTodoLine/>,
                        header: "To-Do App",
                        text: "A MERN to-do app which has different technologies used such as: express,mongo db,node.js and React.",
                        link: <a href={"https://github.com/Gurjantrandahwa/mern-todo-app"}>Visit To-Do</a>
                    },
                ].map((value, index) => {
                    return <div className={"projects"} key={index}>

                        <div className={"text-wrapper"}>
                            <div className={"icon-wrapper"}>
                                {value.icon}
                            </div>
                            <div>
                                <h4>{value.header}</h4>
                                <p>{value.text}</p>
                                {value.link}
                            </div>
                        </div>
                    </div>
                })
            }

        </div>

    </div>
}