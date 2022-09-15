import React, {useState} from "react";
import "./gallery.css";
import {Button,} from "react-bootstrap";
import img_2 from "../../Images/img_2.png";
import img_3 from "../../Images/img_3.png";
import img_4 from "../../Images/img_4.png";
import img_5 from "../../Images/img_5.png";
import img_6 from "../../Images/img_6.png";
import img_7 from "../../Images/img_7.png";
import img_8 from "../../Images/img_8.png";
import img_9 from "../../Images/img_9.png";
import img_10 from "../../Images/img_10.png";
import img_11 from "../../Images/img_11.png";
import img_12 from "../../Images/img_12.png";
import img_13 from "../../Images/img_13.png";

export default function Gallery() {

    const [limit, setLimit] = useState(8)
    const handleLoadImages = () => {
        setLimit((prevLimit) => prevLimit + 3)

    }
    const images = [
        {
            img: img_2,
            text: "This is a caption",
        },

        {
            img: img_4,
            text: "This is a caption",
        },
        {
            img: img_5,
            text: "This is a caption",
        },
        {
            img:img_6,
            text: "This is a caption",
        },
        {
            img: img_8,
            text: "This is a caption",
        },

        {
            img: img_10,
            text: "This is a caption",
        },

        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pa4-full.jpg",
            text: "This is a caption",
        },
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/ps4-full.jpg",
            text: "This is a caption",
        },
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/ps3-full.jpg",
            text: "This is a caption",
        },
        {
            img: img_7,
            text: "This is a caption",
        },

        {
            img: img_9,
            text: "This is a caption",
        },
        {
            img: img_3,
            text: "This is a caption",
        },
        {
            img: img_11,
            text: "This is a caption",
        },
        {
            img: img_12,
            text: "This is a caption",
        },
        {
            img: img_13,
            text: "This is a caption",
        },
    ]
    return <div className={"gallery"} id="portfolio">
        <h2>From My Portfolio</h2>
        <div className={"gallery-images-wrapper"}>
                {images?.slice(0, limit).map((value, index) => {
                    return <div key={index}>
                        <img src={value.img}
                             className={"gallery-images"} alt={""}/>
                    </div>
                })
                }

        </div>
        <Button className={"load-images-btn"} onClick={handleLoadImages}>
            Load more
        </Button>
    </div>
}

