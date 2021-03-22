import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeImage from '../../assets/images/home_image.png';
import "./Home.scss";

export default function Home() {
    return (
        <div className="home-wrapper">
            <Container fluid>
                <Row className="main">
                    <Col lg="7" md="12">
                        <div className="text-wrapper">
                            <h1 className="title">Web Development<br />&amp; Photography</h1>
                            <hr className="ruler" />
                            <p>I'm a Digital Design Director, most recently at MediaMonks <br />
                            and TBWA, working with brands including Adidas, Netflix, <br />
                            Airbnb and Polaroid. My role involves a mix of art direction, <br />
                            hands on design, mentoring and improving team process.<br />
                            Currently freelance.
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
