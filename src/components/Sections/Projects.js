import React from 'react'
import IssueTrackerImage from '../../images/IssueTrackerImg.jpg';
import LyricGrapherImage from '../../images/LyricGrapherImg.jpg';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

export default function Projects() {
    return (
        <Carousel>
            <Carousel.Item>
                <a href="http://dry-sands-09676.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img
                    className="d-block w-100"
                    src={IssueTrackerImage}
                    alt="Issue Tracker"
                    />
                </a>
                <Carousel.Caption>
                    <h3>Issue Tracker</h3>
                    <p>CRUD Application for submitting and managing tickets in an IT environment. </p>
                    <Button className="buttons" variant="outline-light" href="https://github.com/cacciamani10/IssueReport" target="_blank" rel="noopener noreferrer">
                        View Code
                    </Button>
                    <Button className="buttons" variant="outline-light" href="http://dry-sands-09676.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        View Project
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href="https://lyric-grapher.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img
                    className="d-block w-100"
                    src={LyricGrapherImage}
                    alt="Lyric Grapher"
                    />
                </a>
                <Carousel.Caption className="b-caption">
                    <h3>Lyric Grapher</h3>
                    <p>Graphical application to visualize lyrics using Genius API.</p>
                    <Button className="buttons" variant="outline-dark" href="https://github.com/cacciamani10/LyricGrapher" target="_blank" rel="noopener noreferrer">
                        View Code
                    </Button>
                    <Button className="buttons" variant="outline-dark" href="https://lyric-grapher.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        View Project
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}