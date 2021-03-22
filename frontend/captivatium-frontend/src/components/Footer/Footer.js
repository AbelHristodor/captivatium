import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub, FaInstagram } from "react-icons/fa";
import './Footer.scss';

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <div className="footer text-center">
                            <div className="footer-icons">
                                <span className="footer-text">Follow me on</span>
                                <a className="mr-3" href="https://instagram.com/captivatium" target="_blank" rel="noreferrer">
                                    <FaInstagram className="ml-2" size={25} />
                                </a>
                                <a href="https://github.com/AbelHristodor" target="_blank" rel="noreferrer">
                                    <FaGithub className="ml-2" size={25} />
                                </a>
                            </div>
                            <p className="small text-muted copyright">© 2021 Captivatium <br />All Rights Reserved.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
