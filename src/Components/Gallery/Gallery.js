import React, {useState} from "react";
import "./gallery.css";
import {Button,} from "react-bootstrap";
import Masonry from 'react-masonry-css'

export default function Gallery() {
    const [limit, setLimit] = useState(8)

    const handleShowMoreImages = () => {
        if (limit <= 8) {
            let limit = limit + 3;
            setLimit(limit)
        }
    }
    const images = [
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pa1-full.jpg",

        },
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pm1-full.jpg"
        },
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pp1.jpg"
        },
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pa2-full.jpg"
        },
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/ps1.jpg"
        },
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pm2.jpg",
        },

        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pp2.jpg"
        },

        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/ps2-full.jpg"
        },
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pm2.jpg",
        },

        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pp2.jpg"
        },

        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/ps2-full.jpg"
        },
    ]
    return <div className={"gallery"}>
        <div className={"gallery-header"}>
            <h2>From My Portfolio</h2>
            <div className={"gallery-buttons"}>
                <Button>All</Button>
                <Button>Architecture</Button>
                <Button>Macro</Button>
                <Button>Portrait</Button>
                <Button>Still Life</Button>
            </div>
        </div>

        <div className={"gallery-images-wrapper"}>
            <Masonry breakpointCols={3} className="my-masonry-grid"
                     columnClassName="my-masonry-grid_column">
                {
                    images.slice(0,limit).map((image, index) => {
                        return <img src={image.img}
                                    key={index}
                                    className={"gallery-images"} alt={""}/>
                    })
                }
            </Masonry>
        </div>


        <Button className={"load-images-btn"} onClick={handleShowMoreImages}>Load more</Button>
    </div>
}

