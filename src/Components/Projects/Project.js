import React from "react";
import "./Projects.css";
import {motion} from "framer-motion";

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
                        image: "https://cdn.sanity.io/images/e9l8wohw/production/5575946ea059fb99f303a47b42d61d6526e8e8a9-602x402.jpg?w=2000&fit=max&auto=format&dpr=2",
                        name: "Netflix Clone",
                        description: "A Netflix clone app that has a Login and Log Out Authentication with firebase. It has a beautiful Home Screen with all movies looking just like Netflix.",
                        link: <a href={"https://netflix-clone-4e2cc.web.app/"}>Visit Netflix Clone</a>
                    },
                    {
                        image: "https://cdn.sanity.io/images/e9l8wohw/production/5575946ea059fb99f303a47b42d61d6526e8e8a9-602x402.jpg?w=2000&fit=max&auto=format&dpr=2",
                        name: "Netflix Clone",
                        description: "A Netflix clone app that has a Login and Log Out Authentication with firebase. It has a beautiful Home Screen with all movies looking just like Netflix.",
                        link: "https://netflix-clone-4e2cc.web.app/"
                    },
                    {
                        image: "https://cdn.sanity.io/images/e9l8wohw/production/5575946ea059fb99f303a47b42d61d6526e8e8a9-602x402.jpg?w=2000&fit=max&auto=format&dpr=2",
                        name: "Netflix Clone",
                        description: "A Netflix clone app that has a Login and Log Out Authentication with firebase. It has a beautiful Home Screen with all movies looking just like Netflix.    ",
                        link: "https://netflix-clone-4e2cc.web.app/"
                    },
                    {
                        image: "https://cdn.sanity.io/images/e9l8wohw/production/5575946ea059fb99f303a47b42d61d6526e8e8a9-602x402.jpg?w=2000&fit=max&auto=format&dpr=2",
                        name: "Netflix Clone",
                        description: "A Netflix clone app that has a Login and Log Out Authentication with firebase. It has a beautiful Home Screen with all movies looking just like Netflix.    ",
                        link: "https://netflix-clone-4e2cc.web.app/"
                    },
                    {
                        image: "https://cdn.sanity.io/images/e9l8wohw/production/5575946ea059fb99f303a47b42d61d6526e8e8a9-602x402.jpg?w=2000&fit=max&auto=format&dpr=2",
                        name: "Netflix Clone",
                        description: "A Netflix clone app that has a Login and Log Out Authentication with firebase. It has a beautiful Home Screen with all movies looking just like Netflix.    ",
                        link: "https://netflix-clone-4e2cc.web.app/"
                    },].map((value, index) => {
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