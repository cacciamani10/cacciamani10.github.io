import React from 'react';
import Contact from "../Sections/Contact"
import Link from "react-scroll/modules/components/Link";
import GitHub from "../../images/GitHub-Mark-Light-32px.png";
import LinkedIn from "../../images/LI-In-Bug.png";

export function NavBox() {   
    const [modalShow, setModalShow] = React.useState(false);
    return ( 
        <div className="navBox">
            <div className="scrollLinks">
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
                <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {400}
                > 
                    Project 
                </Link>
                <span className="contact" onClick={() => setModalShow(true)}>
                    Contact
                </span>
                <Contact
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
            <div className="outLinks">
                <a href="https://github.com/cacciamani10" target="_blank" rel="noopener noreferrer">
                    <img className="outLinkPicture" src={GitHub} alt="Github"/>
                </a>
                <a href="https://www.linkedin.com/in/jacob-cacciamani-727471176/" target="_blank" rel="noopener noreferrer">
                    <img className="outLinkPicture" src={LinkedIn} alt="LinkedIn"/>
                </a>
                <a className="resume" href="https://resume-serve.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </div>
        </div>
    )
}
export default NavBox;