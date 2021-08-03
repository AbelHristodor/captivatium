import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './About.scss';

export default function About() {
    const imageURL = "https://captivatium-images-resized.s3.eu-central-1.amazonaws.com/resized-Aby-1.jpg";

    return (
        <div className="about-wrapper">
            <Container fluid>
                <Row className="main-section">
                    <Col lg="3">
                        <h1 className="title">About Me</h1>
                        <img src={imageURL} alt="Abel Hristodor Portrait" className="image"></img>
                    </Col>
                    <Col lg="5" md="12" className="description">
                        <h1>Hi!</h1>
                        <p>My name is Abel and I'm a junior web developer</p>
                        <p>My journey started at the age of 16 years old, when I started to wonder
                         how the games I was playing were made and how in general, my pc was working.</p>

                        <p>Since then I started learning and learning more and more about tech in general, to later
                        focus my attention to the web, in particular web development.</p>

                        <p>My developer journey began with HTML5, CSS3 and then moved on to a backend language, Python, 
                        in order to give some life to my websites. Since then I learned how to use Python's Django Framework 
                         and also Javascript, a programming language that I really enjoy using these days.</p>

                        <p>At the moment, my favourite stack to use is the MERN one (Mongo, ExpressJs, ReactJs, NodeJs), 
                            in fact, this very own website is made using these technologies (plus AWS S3 and AWS Lambda to handle images)
                        </p>

                        <h1>Other Hobbies</h1>
                        <p>As you may have seen, I'm very passionate about photography and videography, that's the reason i started
                            my own brand <i>Captivatium</i> in order to share my creations with the world! Hope you enjoy my content!</p>
                        <h1>Gear:</h1>
                        <p> For Video & Photo related work i use:</p>
                            <ul>
                                <li>Sony a6400</li>
                                <li>Sigma 30mm f1.4</li>
                                <li>Sigma 56mm 1.4</li>
                                <li>Sony 16-50 f3.5-5.6</li>
                                <li>Zhiyun Crane Plus</li>
                            </ul>
                        <p>
                            While for writing code i use my trusty Lenovo Thinkpad T580 (I7 8550U, RAM 16GB, 512 SSD)
                        </p>    
                        
                    </Col>
                    <Col lg="4" md="0">
                    </Col>
                </Row>
                <Row className="contact-section">
                    <Col xs="12">
                        <div className="footer-contact">
                            <h2 className="contact-text">Want to get in touch?</h2>
                            <a href="/contact"><button type="button" className="contact-redirect">Contact me</button></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
