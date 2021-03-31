import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Gallery, Item } from 'react-photoswipe-gallery'

import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import './Gallery.scss';

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

    return (
        <Container fluid className="gallery-wrapper">
            {/*
            <Row className="title-wrapper">
                <Col sm="12"><h1 className="title">Gallery</h1></Col>
            </Row> */}
            <Row className="categories-wrapper mt-2">
                <Col sm="12" className="">
                    <ul className="categories list-group list-group-horizontal d-flex justify-content-center">
                        <li className="category-item list-group-item" data-filter="all"><a href="#asd">All</a></li>
                        <li className="category-item list-group-item" data-filter="1"><a href="#das">Landscapes</a></li>
                        <li className="category-item list-group-item" data-filter="2"><a href="#dd">Portraits</a></li>
                    </ul>
                </Col>
            </Row>
            <Row className="gallery">
                <Col sm="12 flex-gallery">
                    { PhotoGallery(urls) }
                </Col>
            </Row>
        </Container>
    )
}


const PhotoGallery = (items) => {
    return (
        <Gallery>
            { items.map((item) => {
                return (
                    <Item
                        original={item.src}
                        thumbnail={item.thumbnail}
                        width={item.w}
                        height={item.h}
                    >
                        {({ ref, open }) => (
                            <div className="filtr-item">
                                <img ref={ref} onClick={open} src={item.thumbnail} alt={item.title} />
                            </div>
                        )}
                    </Item>
                )
            })}
        </Gallery>
    )
}
