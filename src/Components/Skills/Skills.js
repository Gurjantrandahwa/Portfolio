import React from "react";
import "./skills.css";
import img from "./Images/img.png"
import img_1 from "./Images/img_1.png"
import img_4 from "./Images/img_4.png"
import img_5 from "./Images/img_5.png"
import {motion} from "framer-motion";

export default function Skills() {
    return <div className={"skills"}
                id={"skills"}>

        <p className={"skills-header"}>
            Skills
        </p>
        <p className={"skills-hover-text"}>
            Hover over Skills
        </p>
        <motion.div
            initial={{
                x: -200,
                opacity: 0
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true}}
            className={"skills-wrapper"}>
            {
                [
                    {
                        skill: img,
                        skillName: "HTML",
                        progress: "70",
                    },
                    {
                        skill: img_1,
                        skillName: "CSS",
                    },
                    {
                        skill: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
                        skillName: "JavaScript",
                    },
                    {
                        skill: "https://ionicframework.com/docs/icons/logo-react-icon.png",
                        skillName: "React.js",
                    },
                    {
                        skill: "https://miro.medium.com/max/400/1*onZhQJU7A3ab6V1sHfMRkQ.jpeg",
                        skillName: "Bootstrap",
                    },
                    {
                        skill: "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/screenshot_361.png?itok=w4CzcWyb",
                        skillName: "Tailwind",
                    },
                    {
                        skill: img_4,
                        skillName: "Firebase",
                    },
                    {
                        skill: "https://www.joykal.com/wp-content/uploads/2019/09/mongodb.jpg",
                        skillName: "MongoDB",
                    },
                    {
                        skill: img_5,
                        skillName: "GitHub",
                    },
                    {
                        skill: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOfptrC48Ggz3JC23XVvfUc6qPqMrkrGGZ5ajLqLDARAP15-8lnl4ETCV_BNdMoW7TjU&usqp=CAU",
                        skillName: "Node.js",
                    },

                    {
                        skill: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn56SnWHLJgY3sVt4LDvMFEQIdeEUnBZun3Z7-tUjFoPCYAS9rHopKcl-slO-t1aH45hI&usqp=CAU",
                        skillName: "Next.js",
                    },

                ].map((value, index) => {
                    return <div key={index}>
                        <div>
                            <img className={"skills-wrapper-images"}
                                 src={value.skill}
                                 alt={""}
                            />
                        </div>

                        <p className={"skillName"}>
                            {value.skillName}
                        </p>
                        {/*<div className={"skill-progress"}>*/}
                        {/*    <p className={"progress-text"}>*/}
                        {/*        {value.progress}%*/}
                        {/*    </p>*/}
                        {/*</div>*/}

                    </div>
                })
            }
        </motion.div>
    </div>
}