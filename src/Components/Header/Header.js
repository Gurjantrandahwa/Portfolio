import React from "react";
import "./Header.css";
import {SocialIcon} from 'react-social-icons';
import {motion} from "framer-motion";

function Header() {
    return <header className={"social-header"}>
        <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className={"social-icons"}>
            {
                [
                    {
                        icon: <SocialIcon fgColor={"gray"}
                                          bgColor={"transparent"}
                                          url={"https://www.facebook.com/profile.php?id=100009195903194"}/>
                    },
                    {
                        icon: <SocialIcon fgColor={"gray"}
                                          bgColor={"transparent"}
                                          url={"https://www.instagram.com/gur_jant_singh_r/"}/>
                    },

                    {
                        icon: <SocialIcon fgColor={"gray"}
                                          bgColor={"transparent"}
                                          url={"https://www.linkedin.com/in/gurjant-singh-49688a249/"}/>
                    },
                    {
                        icon: <SocialIcon fgColor={"gray"} bgColor={"transparent"}
                                          url={"https://github.com/Gurjantrandahwa"}/>
                    },

                ].map((value, index) => {
                    return <div key={index}>
                        {value.icon}

                    </div>
                })
            }
        </motion.div>
        <a href={"#contact"}>
            <div className={"mail-icon"}>
                <SocialIcon fgColor={"gray"} bgColor={"transparent"} network={"email"}/>
                <p className={"mail-text"}>Get in Touch</p>
            </div>
        </a>
    </header>
}

export default Header
