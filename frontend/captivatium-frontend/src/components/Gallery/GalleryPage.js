import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { PhotoSwipeGallery } from 'react-photoswipe';

import './Gallery.scss';
import './photoswipe.scss';

export default function GalleryPage() {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/images/all')
            .then((response) => {
                const items = response.data.map((item) => {
                    let [w, h] = item.resolution;
                    item.w = w;
                    item.h = h;
                    return item;
                })
                setUrls(items);
            });
    }, [])

    const getThumbnailContent = (item) => {
        return (
          <img src={item.thumbnail} width={200} height="auto" alt={item.name} loading="lazy" />
        );
      }

    return (
        <Container fluid className="gallery-wrapper">
            {/*
            <Row className="title-wrapper">
                <Col sm="12"><h1 className="title">Gallery</h1></Col>
            </Row> */}
            <Row className="categories-wrapper mt-2">
                <Col sm="12" className="">
                    <ul className="categories list-group list-group-horizontal d-flex justify-content-center">
                        <li className="category-item list-group-item"><a href="#asd">All</a></li>
                        <li className="category-item list-group-item"><a href="#das">Landscapes</a></li>
                        <li className="category-item list-group-item"><a href="#dd">Portraits</a></li>
                    </ul>
                </Col>
            </Row>
            <Row className="gallery">
                <Col sm="12">
                    <PhotoSwipeGallery items={urls} thumbnailContent={getThumbnailContent} />
                </Col>
            </Row>
        </Container>
    )
}
