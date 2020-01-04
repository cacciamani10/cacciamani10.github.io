import React from 'react'
import IssueTrackerImage from '../../images/issueTracker.jpg';
import Button from 'react-bootstrap/Button';

export default function Projects() {
    return (
        <div className="section projects">
            <a href="http://dry-sands-09676.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <img className="card" src={IssueTrackerImage} alt="Issue Tracker" />
            </a>
            <div className="project-description">
                <p>Web CRUD Application for submitting and managing tickets in an IT environment. </p>
                <Button className="buttons" variant="outline-warning" href="https://github.com/cacciamani10/IssueReport" target="_blank" rel="noopener noreferrer">
                    View Code
                </Button>
                <Button variant="outline-warning" href="http://dry-sands-09676.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    View Site
                </Button>
            </div>
        </div>
    )
}
