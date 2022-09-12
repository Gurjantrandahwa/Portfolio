import React, {useState} from "react";
import "./gallery.css";
import {Button,} from "react-bootstrap";
import Masonry from 'react-masonry-css'

export default function Gallery() {
    const [limit, setLimit] = useState(8)

    const images = [
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pa1-full.jpg",
            text: "This is a caption",
        },
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pm1-full.jpg",
            text: "This is a caption",
        },
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pp1.jpg",
            text: "This is a caption",
        },
        {
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/pa2-full.jpg",
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
            img: "https://demos.elemisthemes.com/lumos/vertical/dark/style/images/art/ps2-full.jpg",
            text: "This is a caption",
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
                    images.map((value, index) => {
                        return <div key={index}>
                            <img src={value.img}
                                 className={"gallery-images"} alt={""}/>
                            <div className={"middle"}>
                                <h6 className={"text"}>{value.text}</h6>
                            </div>

                        </div>
                    })
                }
            </Masonry>
        </div>

        <Button className={"load-images-btn"} onClick={() => {
            setLimit(+3)
        }}>Load more</Button>
    </div>
}

