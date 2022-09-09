import React, {useState} from "react";
import "./Sidebar.css";
import {AiOutlineHome} from "react-icons/ai";
import {BsCardImage, BsCardText, BsPerson} from "react-icons/bs";
import {Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

function Sidebar() {

    return <Row className={"sidebar"}>
        <Col>
            <img className={"logo-img"}
                 src={"https://demos.elemisthemes.com/lumos/vertical/dark/style/images/logo@2x.png"} alt={""}/>
        </Col>
        <div className={"sidebar-icons"}>
            <Col className="sidebar-tooltip"> <AiOutlineHome/>
                <span className="tooltip-text">Home</span>
            </Col>
            <Col className="sidebar-tooltip"> <BsCardImage/>
                <span className="tooltip-text">Portfolio</span>
            </Col>
            <Col className="sidebar-tooltip"> <BsPerson/>
                <span className="tooltip-text">About</span>
            </Col>
            <Col className="sidebar-tooltip"> <BsCardText/>
                <span className="tooltip-text">Contact</span>
            </Col>
        </div>

    </Row>
}

export default Sidebar
