import React from 'react'
import BackgroundImage from '../../images/treesandstars2.jpg';

var backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
};

export default function Home() {
    return (
        <div className="section" style={backgroundStyle}>
            <div className="heading">
                <h1 className="name">Jacob Cacciamani</h1>
                <h3 className="title">Full Stack Web Developer</h3>
            </div>
        </div>
    )
}
