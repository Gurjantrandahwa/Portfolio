import React, {useEffect, useState} from "react";
import "./Sidebar.css";
import {AiOutlineHome} from "react-icons/ai";
import {BsCardImage, BsCardText, BsPerson} from "react-icons/bs";
import {Button, Modal, Nav, Navbar} from "react-bootstrap";
import {GoThreeBars} from "react-icons/go";
import {FaPhoenixSquadron} from "react-icons/fa";

function Sidebar() {
    const [width, setWidth] = useState(window.innerWidth);
    const [show, setShow] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const [hideIcon, setHideIcon] = useState(true);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }


    const handleShow = () => {
        setShow(true)
        setShowIcon(true)
        setHideIcon(false)
    }
    const handleClose = () => {
        setShow(false)
        setShowIcon(false)
        setHideIcon(true)
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 800;
    if (isMobile) {
        return <div className={"mobile-sidebar"}>
            <div className={"logo-container"}>
                <div>
                    <FaPhoenixSquadron size={34} className={"logo-img"}/>
                </div>
                <div>
                    {
                        hideIcon ? <Button className={"sidebar-btn"} onClick={handleShow}> <GoThreeBars/> </Button> : null
                    }

                    {
                        showIcon ? <Button className={"sidebar-btn"} onClick={handleClose}>X</Button> : null
                    }

                </div>
            </div>
            <Modal className={"modal-mobile"}
                   show={show}
                   onHide={() => setShow(false)}
            >
                <Modal.Body>
                    <div className={"navbar-container"}>
                        <Navbar>
                            <Nav className={"navbar-text"}>
                                <Nav.Link href="#home" onClick={handleClose}>Home</Nav.Link>
                                <hr/>
                                <Nav.Link href="#portfolio" onClick={handleClose}>Portfolio</Nav.Link>
                                <hr/>
                                <Nav.Link href="#about" onClick={handleClose}>About</Nav.Link>
                                <hr/>
                                <Nav.Link href="#contact" onClick={handleClose}>Contact</Nav.Link>
                                <hr/>
                            </Nav>
                        </Navbar>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    }
    return <div className={"sidebar"}>
        <div>

            <FaPhoenixSquadron size={34} className={"logo-img"}/>
        </div>

        <Navbar>
            <Nav>
                <div className="sidebar-tooltip ">
                    <Nav.Link href="#home">
                        <AiOutlineHome/>
                        <span className="tooltip-text">Home</span>
                    </Nav.Link>
                </div>

                <div className="sidebar-tooltip">
                    <Nav.Link href="#portfolio">
                        <BsCardImage/>
                        <span className="tooltip-text">Portfolio</span>

                    </Nav.Link>
                </div>

                <div className="sidebar-tooltip">
                    <Nav.Link href="#about">
                        <BsPerson/>
                        <span className="tooltip-text">About</span>

                    </Nav.Link>
                </div>
                <div className="sidebar-tooltip">
                    <Nav.Link href="#contact">
                        <BsCardText/>
                        <span className="tooltip-text">Contact</span>
                    </Nav.Link>
                </div>
            </Nav>
        </Navbar>
    </div>
}

export default Sidebar
