import React, { Component } from 'react';
import { Link } from "react-scroll";

export default class NavBox extends Component {
    state = {};
    
    render() {
        return (
            <div className="navBox">
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
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {400}
                > 
                    Contact 
                </Link>
            </div>
        )
    }
}
