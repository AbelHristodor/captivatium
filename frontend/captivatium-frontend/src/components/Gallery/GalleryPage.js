import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Gallery from 'react-photo-gallery';
import './Gallery.scss';

export default function GalleryPage() {
    return (
        <Container fluid className="gallery-wrapper text-center">
            <Row className="title-wrapper">
                <Col sm="12"><h1 className="title">Gallery</h1></Col>
            </Row>
            <Row className="categories-wrapper">
                <Col sm="12">
                    <ul className="categories list-group list-group-horizontal">
                        <li className="category-item list-group-item">All</li>
                        <li className="category-item list-group-item">Landscapes</li>
                        <li className="category-item list-group-item">Portraits</li>
                    </ul>
                </Col>
            </Row>
            <Row className="gallery">
            </Row>
        </Container>
    )
}
