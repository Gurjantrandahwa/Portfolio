import React from "react";
import "./Sidebar.css";
import {AiOutlineHome} from "react-icons/ai";
import {BsCardImage, BsCardText, BsPerson} from "react-icons/bs";
import {Col, Nav, Navbar, Row} from "react-bootstrap";
import ScrollIntoView from 'react-scroll-into-view'

function Sidebar() {

    return <Row className={"sidebar"}>
        <Col>
            <img className={"logo-img"}
                 src={"https://demos.elemisthemes.com/lumos/vertical/dark/style/images/logo@2x.png"} alt={""}/>
        </Col>
        <div className={"sidebar-icons"}>
            <Navbar bg="dark" variant="dark">
                <Nav className="me-auto">
                    <Col className="sidebar-tooltip ">
                        <Nav.Link href="#home">
                            <AiOutlineHome/>
                            <span className="tooltip-text">Home</span>

                        </Nav.Link>
                    </Col>
                    <ScrollIntoView selector={'#portfolio'}>
                        <Col className="sidebar-tooltip">
                            <Nav.Link href="#portfolio">
                                <BsCardImage/>
                                <span className="tooltip-text">Portfolio</span>

                            </Nav.Link>
                        </Col>
                    </ScrollIntoView>
                    <Col className="sidebar-tooltip">
                        <Nav.Link href="#about">
                            <BsPerson/>
                            <span className="tooltip-text">About</span>

                        </Nav.Link>
                    </Col>
                    <Col className="sidebar-tooltip">
                        <Nav.Link href="#contact">
                            <BsCardText/>
                            <span className="tooltip-text">Contact</span>
                        </Nav.Link>
                    </Col>
                </Nav>
            </Navbar>
        </div>
    </Row>
}

export default Sidebar
