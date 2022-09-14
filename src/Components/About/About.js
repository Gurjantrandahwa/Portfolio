import React from "react";
import "./About.css";
import {TbBrandTinder} from "react-icons/tb";
import {CgWebsite} from "react-icons/cg";
import {AiOutlineAmazon, AiOutlineLogin, AiOutlineYoutube} from "react-icons/ai";
import {FiTwitter} from "react-icons/fi";
import {TiWeatherPartlySunny} from "react-icons/ti";
import {RiTodoLine} from "react-icons/ri";
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
                    Javascript.</p>
                <p>Here are a few past design projects I've worked on</p>
            </div>

            <img src={img} alt={""}/>

        </div>
        <div className={"projects-wrapper"}>
            <h2>My Projects</h2>
            {
                [

                    {
                        icon: <TbBrandTinder/>,
                        header: "Tinder Clone",
                        text: "  A React blog app with a good UI and " +
                            "functionality,In this you can create,search and\n" +
                            "  filter your blogs.",
                        link: <a href={"https://github.com/Gurjantrandahwa/MERN-tinder-clone"}>Visit Tinder Clone</a>
                    },
                    {
                        icon: <AiOutlineAmazon/>,
                        header: "Amazon Clone",
                        text: "  A React blog app with a good UI and " +
                            "functionality,In this you can create,search and\n" +
                            "  filter your blogs.",
                        link: <a href={"https://e-clone-b0b92.web.app/"}>Visit Amazon Clone</a>
                    },
                    {
                        icon: <AiOutlineYoutube/>,
                        header: "Youtube Clone",
                        text: "  A React blog app with a good UI and " +
                            "functionality,In this you can create,search and\n" +
                            "  filter your blogs.",
                        link: <a href={"https://clone-9b57d.web.app/"}>Visit Youtube Clone</a>
                    },
                    {
                        icon: <FiTwitter/>,
                        header: "Twitter Clone",
                        text: "  A React blog app with a good UI and " +
                            "functionality,In this you can create,search and\n" +
                            "  filter your blogs.",
                        link: <a href={"https://twitter-clone-94586.web.app/"}>Visit Twitter Clone</a>
                    },
                    {
                        icon: <AiOutlineLogin/>,
                        header: "Login Page",
                        text: "  A React blog app with a good UI and " +
                            "functionality,In this you can create,search and\n" +
                            "  filter your blogs.",
                        link: <a href={" https://github.com/Gurjantrandahwa/mern-login-register"}>Visit Twitter
                            Clone</a>
                    },
                    {
                        icon: <TiWeatherPartlySunny/>,
                        header: "Weather App",
                        text: "  A React blog app with a good UI and " +
                            "functionality,In this you can create,search and\n" +
                            "  filter your blogs.",
                        link: <a href={"https://github.com/Gurjantrandahwa/Weather-React-App"}>Visit Weather App</a>
                    },
                    {
                        icon: <FaBlog/>,
                        header: "Blog App",
                        text: "  A React blog app with a good UI and " +
                            "functionality,In this you can create,search and\n" +
                            "  filter your blogs.",
                        link: <a href={"https://blog-app-f22d2.web.app/"}>Visit Blog App</a>
                    },
                    {
                        icon: <CgWebsite/>,
                        header: "E-commerce Website",
                        text: "  A React blog app with a good UI and " +
                            "functionality,In this you can create,search and\n" +
                            "  filter your blogs.",
                        link: <a href={"https://github.com/Gurjantrandahwa/e-commerce-react"}>Visit E-commerce
                            Website</a>
                    },
                    {
                        icon: <RiTodoLine/>,
                        header: "To-Do App",
                        text: "  A React blog app with a good UI and " +
                            "functionality,In this you can create,search and\n" +
                            "  filter your blogs.",
                        link: <a href={"https://github.com/Gurjantrandahwa/mern-todo-app"}>Visit To-Do</a>
                    },
                ].map((value, index) => {
                    return <div className={"projects"} key={index}>

                        <div className={"d-flex"}>
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