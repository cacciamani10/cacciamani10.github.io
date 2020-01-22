import React from 'react';
import Contact from "../Sections/Contact"
import Link from "react-scroll/modules/components/Link";
import GitHub from "../../images/GitHub-Mark-Light-32px.png";
import LinkedIn from "../../images/LI-In-Bug.png";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export function NavBox() {   
    const [modalShow, setModalShow] = React.useState(false);
    return ( 
        <Navbar className="sticky-nav" fixed="top" collapseOnSelect expand="sm">
            <Navbar.Brand>
                <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {400}
                > 
                    Home 
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {400}
                        > 
                            About 
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link
                            to="carousel"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {400}
                        > 
                            Project 
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="#">
                        <span onClick={() => setModalShow(true)}>
                            Contact
                        </span>
                        <Contact
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        />
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className="resume" href="https://resume-serve.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        Resume
                    </Nav.Link>
                    <Nav.Link href="https://github.com/cacciamani10" target="_blank" rel="noopener noreferrer">
                        <img className="outLinkPicture" src={GitHub} alt="Github"/>
                    </Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/jacob-cacciamani-727471176/" target="_blank" rel="noopener noreferrer">
                        <img className="outLinkPicture" src={LinkedIn} alt="LinkedIn"/>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBox;
