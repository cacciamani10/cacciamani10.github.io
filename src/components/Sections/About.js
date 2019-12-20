import React from 'react'

export default function About() {
    return (
        <div className="section about">
            <table>
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
                                Javascript => (ES6)
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
                    <td colSpan={2}>
                        <ul>
                            <li className="list-header">
                                Query Languages
                            </li>
                            <li>
                                Postgresl and MySQL
                            </li>
                            <li>
                                NoSQL MongoDB
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
                                Node.js
                            </li>
                            <li>
                                Express
                            </li>
                        </ul>
                    </td>
                </tr>
            </table>
            
        </div>
    )
}
