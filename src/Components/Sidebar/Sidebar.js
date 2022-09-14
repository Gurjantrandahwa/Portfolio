import React, {useEffect, useState} from "react";
import "./Sidebar.css";
import {AiOutlineHome} from "react-icons/ai";
import {BsCardImage, BsCardText, BsPerson} from "react-icons/bs";
import {CloseButton, Modal, Nav, Navbar} from "react-bootstrap";
import {GoThreeBars} from "react-icons/go";

function Sidebar() {
    const [width, setWidth] = useState(window.innerWidth);
    const [show, setShow] = useState(false)

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    const handleClose = () => {
        setShow(false)
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
            <div className={"d-flex"}>
                <div>
                    <img className={"logo-img-mobile"}
                         src={"https://demos.elemisthemes.com/lumos/vertical/dark/style/images/logo@2x.png"} alt={""}/>
                </div>
                <div className={"mobile-side-icon"} onClick={() => setShow(true)}>
                    <GoThreeBars/>
                </div>
            </div>
            <Modal className={"modal-mobile"}
                   show={show}
                   onHide={() => setShow(false)}
                   // dialogClassName="modal-90w"
                   aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header>
                    <button onClick={handleClose}>Close</button>
                </Modal.Header>
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
            <img className={"logo-img"}
                 src={"https://demos.elemisthemes.com/lumos/vertical/dark/style/images/logo@2x.png"} alt={""}/>
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
