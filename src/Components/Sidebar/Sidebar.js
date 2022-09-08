import React from "react";
import "./Sidebar.css";
import {AiOutlineHome} from "react-icons/ai";
import {BsCardImage, BsCardText, BsPerson} from "react-icons/bs";
import {Col, Row} from "react-bootstrap";

function Sidebar() {
    return <Row className={"sidebar"}>
        <Col>
            <img className={"logo-img"}
                 src={"https://demos.elemisthemes.com/lumos/vertical/dark/style/images/logo@2x.png"} alt={""}/>
        </Col>

            {
                [
                    {icon: <AiOutlineHome/>},
                    {icon: <BsCardImage/>},
                    {icon: <BsPerson/>},
                    {icon: <BsCardText/>},
                ].map(((value, index) => {
                    return <div key={index}>
                        <Col  className={"sidebar-icons"}>{value.icon}</Col>
                    </div>
                }))
            }
    </Row>
}

export default Sidebar
