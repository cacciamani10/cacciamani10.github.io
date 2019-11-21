import React, { Component } from 'react';
import { Link } from "react-scroll";
import GitHub from "../../images/GitHub-Mark-Light-32px.png";
import LinkedIn from "../../images/LI-In-Bug.png";

export default class NavBox extends Component {
    state = {};
    
    render() {
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
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {400}
                    > 
                        Projects 
                    </Link>
                </div>
                <div className="outLinks">
                    <a href="https://github.com/cacciamani10" target="_blank" rel="noopener noreferrer">
                        <img className="outLinkPicture" src={GitHub} alt="Github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jacob-cacciamani-727471176/" target="_blank" rel="noopener noreferrer">
                        <img className="outLinkPicture" src={LinkedIn} alt="LinkedIn"/>
                    </a>
                </div>
            </div>
        )
    }
}
