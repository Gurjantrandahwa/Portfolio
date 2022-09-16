import React, {useState} from "react";
import "./gallery.css";
import {Button,} from "react-bootstrap";
import img_2 from "../../Images/img_2.png";
import img_4 from "../../Images/img_4.png";
import img_5 from "../../Images/img_5.png";
import img_6 from "../../Images/img_6.png";
import img_8 from "../../Images/img_8.png";
import img_9 from "../../Images/img_9.png";
import img_10 from "../../Images/img_10.png";
import img_11 from "../../Images/img_11.png";
import img_12 from "../../Images/img_12.png";
import img_14 from "../../Images/img_14.png";
import img_15 from "../../Images/img_15.png";
import img_16 from "../../Images/img_16.png";
import img_17 from "../../Images/img_17.png";
import img_18 from "../../Images/img_18.png";
import img_19 from "../../Images/img_19.png";
import img_20 from "../../Images/img_20.png";
import img_21 from "../../Images/img_21.png";
import img_22 from "../../Images/img_22.png";
import img_23 from "../../Images/img_23.png";
import img_24 from "../../Images/img_24.png";
import img_25 from "../../Images/img_25.png";
import img_26 from "../../Images/img_26.png";
import img_27 from "../../Images/img_27.png";
import img_28 from "../../Images/img_28.png";

export default function Gallery() {

    const [limit, setLimit] = useState(8)
    const handleLoadImages = () => {
        setLimit((prevLimit) => prevLimit + 3)

    }
    const images = [
        {
            img: img_14,
            text:"Tinder Clone"
        },
        {
            img: img_16,
            text:"Amazon Clone"
        },
        {
            img: img_15,
            text:"Amazon Clone"
        },
        {
            img: img_17,
            text:"Youtube Clone"
        },
        {
            img: img_18,
            text:"Twitter Clone"
        },
        {
            img: img_19,
            text:"E-commerce Website"
        },
        {
            img: img_25,
            text:"E-commerce Website"
        },
        {
            img: img_26,
            text:"E-commerce Website"
        },
        {
            img: img_22,
            text:"Blog App"
        },
        {
            img: img_20,
            text:"MERN Login"
        },
        {
            img: img_21,
            text:"MERN SignIn"
        },

        {
            img: img_24,
            text:"MERN To-Do"
        },
        {
            img: img_23,
            text:"Weather App"
        },
        {
            img: img_27,
            text:"Calculator App"
        },
        {
            img: img_10,
            text:"This is Caption"
        },

        {
            img: img_2,
            text:"This is Caption"

        },

        {
            img: img_4,
            text:"This is Caption"

        },
        {
            img: img_5,
            text:"This is Caption"

        },
        {
            img:img_6,
            text:"This is Caption"

        },
        {
            img: img_8,
            text:"This is Caption"

        },
        {
            img: img_28,
            text:"This is Caption"
        },

        {
            img: img_9,
            text:"This is Caption"

        },

        {
            img: img_11,
            text:"This is Caption"

        },
        {
            img: img_12,
            text:"This is Caption"

        },

    ]
    return <div className={"gallery"} id="portfolio">
        <h2>From My Portfolio</h2>
        <div className={"gallery-images-wrapper"}>
                {images?.slice(0, limit).map((value, index) => {
                    return <div key={index} className={"img-container"}>
                        <img src={value.img}
                             className={"gallery-images"} alt={""}/>
                   <div className={"middle"}>
                       <h5 className={"text"}> {value.text}</h5>
                   </div>

                    </div>
                })
                }

        </div>
        <Button className={"load-images-btn"} onClick={handleLoadImages}>
            Load more
        </Button>
    </div>
}

