import React from 'react'
import IssueTrackerImage from '../../images/issueTracker.jpg';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Projects() {
    return (
        <div className="projects">
            <div className="project-description">
                <Container>
                    <Row>
                        <Col sm={6} className="left-col">
                            <a href="http://dry-sands-09676.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img className="card" src={IssueTrackerImage} alt="Issue Tracker" />
                            </a>
                        </Col>
                        <Col sm={6} className="right-col">
                        <p>Web CRUD Application for submitting and managing tickets in an IT environment. </p>
                            <Button className="buttons" variant="outline-warning" href="https://github.com/cacciamani10/IssueReport" target="_blank" rel="noopener noreferrer">
                                View Code
                            </Button>
                            <Button variant="outline-warning" href="http://dry-sands-09676.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                View Site
                            </Button>
                        </Col>
                    </Row>
                    
                </Container>
                
                
            </div>
        </div>
    )
}
