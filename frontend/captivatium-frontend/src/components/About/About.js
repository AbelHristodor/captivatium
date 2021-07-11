import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './About.scss';

export default function About() {
    const imageURL = "https://captivatium-images-resized.s3.eu-central-1.amazonaws.com/resized-Aby-1.jpg";

    return (
        <div className="projects-wrapper">
            <Container fluid>
                <Row>
                    <Col md="12" className="title">
                        <h3>About Me</h3>
                        <img src={imageURL} alt="Abel Hristodor Portrait" className="image"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
