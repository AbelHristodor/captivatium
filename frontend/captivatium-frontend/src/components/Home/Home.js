import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.scss";

export default function Home() {
    const HomeImage = "https://captivatium-images.s3.eu-central-1.amazonaws.com/home_image.png";
    return (
        <div className="home-wrapper">
            <Container fluid>
                <Row className="main">
                    <Col lg="7" md="12">
                        <div className="text-wrapper">
                            <h1 className="title">Web Development<br />&amp; Photography</h1>
                            <hr className="ruler" />
                            <p>I'm a self-taught Web Developer and Photographer <br />
                            with a big passion for developing both Frontend and Backend<br />
                            web apps, even though i prefer backend stuff. <br />
                            I'm also a very (and I mean very) commited photographer, <br />
                            I basically never leave home without my camera!<br />
                            Currently a Computer Science student based in Italy.
                            <br />
                            </p>
                        </div>
                    </Col>
                    <Col lg="5" md="12">
                        <div className="image-wrapper">
                            <img src={HomeImage} className="home-image ml-auto" alt="home"></img>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="7">
                        <div className="name">
                            <p className="name-title">Abel Hristodor</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
