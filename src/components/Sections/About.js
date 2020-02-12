import React from 'react'
import Portrait from '../../images/portrait.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <div className="about">
        <Container>
            <Row>
                <Col className="left-col">
                    <a href="https://www.linkedin.com/in/jacob-cacciamani-727471176/" target="_blank" rel="noopener noreferrer">
                        <img className="portrait" src={Portrait} alt="Jacob Cacciamani" />
                    </a>
                </Col>
                <Col className="align-text-bottom right-col">
                    <h2 className="ssection-header">
                        Relevant Technologies
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col className="left-col">
                    <h3 className="description">I'm a web developer dedicated to creating solutions to buisiness problems with web technologies.</h3>
                </Col>
                <Col className="right-col">
                <table className="skills">
                    <tbody>
                    <tr>                
                        <th className="header-box">
                            Front-End
                        </th>
                        <th className="header-box">
                            Backend
                        </th>
                        <th className="header-box">
                            Database Systems
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                <li className="list-header">
                                    Fundamentals
                                </li>
                                <li>
                                    HTML5
                                </li>
                                <li>
                                    CSS3
                                </li>
                                <li>
                                    Javascript
                                </li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li className="list-header">
                                    Fundamentals
                                </li>
                                <li>
                                    Java
                                </li>
                                <li>
                                    C#
                                </li>
                                <li>
                                    Javascript
                                </li>
                                <li>
                                    C++
                                </li>
                            </ul>
                        </td>
                        <td rowSpan={2}>
                            <ul>
                                <li className="list-header">
                                    Query Languages
                                </li>
                                <li>
                                    Postgresl
                                </li>
                                <li>
                                    MySQL
                                </li>
                                <li>
                                    MongoDB
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                <li className="list-header">
                                    Frameworks
                                </li>
                                <li>
                                    React
                                </li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li className="list-header">
                                    Frameworks
                                </li>
                                <li>
                                    Node.js
                                </li>
                                <li>
                                    Express
                                </li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                </Col>
                
            </Row>
        </Container>           
        </div>
    )
}
