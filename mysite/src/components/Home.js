import React from 'react'
import './Home.css'

export default function Home () {

    return (
        <div className="home">
            <h3>WELCOME</h3>
            <div className="about-content">
            <ul className="skill-overview-list">
                <li className="title1">Full Stack Software Developer</li>
                <li className="header">Technologies:</li>
                <li>
                    <ul className="tech-list">
                        <li className="header2">Languages:</li>
                            <li className="items">Javascript</li>
                            <li className="items">Ruby</li>
                            <li className="items">HTML</li>
                            <li className="items">CSS/Bootstrap</li>
                            <li className="items">Typescript</li>
                        <li className="header2">Frameworks:</li>
                            <li className="items">React.js</li>
                            <li className="items">Vue.js (incl. Vuex)</li>
                            <li className="items">Node.js with Express</li>
                            <li className="items">Ruby on Rails</li>
                            <li className="items">Cypress Testing</li>
                            <li className="items">Postgres and Sql</li>
                    </ul>
                <li className="header">Experience:</li>
                <li className="items">Flatiron School Aug-Dec 2019</li>
                <li className="items">Personal Projects</li>
                </li>
                <li className="title2">Professional Classical Guitarist</li>
                <li>
                    <ul className="guitar-skills">
                        <li className="items">Over 20 years of experience</li>
                        <li className="items">Suzuki Teacher Certified</li>
                        <li className="items">Specialist in Baroque and Early Music</li>
                        <li className="items">Contact for Booking and Lessons</li>
                    </ul>
                </li>
            </ul>
                <div className="image-container">
                    <div className="my-picture1"></div>
                </div>
            </div>
        </div> 
    )
}