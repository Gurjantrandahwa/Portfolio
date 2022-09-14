import React, {useState} from "react";
import "./gallery.css";
import {Button,} from "react-bootstrap";
import Masonry from 'react-masonry-css'
import img_2 from "../../Images/img_2.png";
import img_3 from "../../Images/img_3.png";
import img_4 from "../../Images/img_4.png";
import img_5 from "../../Images/img_5.png";

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
            img: img_3,
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
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/ps1.jpg",
            text: "This is a caption",
        },
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pm2.jpg",
            text: "This is a caption",
        },

        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pp2.jpg",
            text: "This is a caption",
        },

        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/ps2.jpg",
            text: "This is a caption",
        },
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pm3-full.jpg",
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

    ]
    return <div className={"gallery"} id="portfolio">
        <h2>From My Portfolio</h2>
        <div className={"gallery-images-wrapper"}>
            {/*<Masonry breakpointCols={3} className="my-masonry-grid"*/}
            {/*         columnClassName="my-masonry-grid_column">*/}

                {images?.slice(0, limit).map((value, index) => {
                    return <div key={index}>
                        <img src={value.img}
                             className={"gallery-images"} alt={""}/>
                    </div>
                })
                }
            {/*</Masonry>*/}
        </div>

        <Button className={"load-images-btn"} onClick={handleLoadImages}>
            Load more
        </Button>
    </div>
}

