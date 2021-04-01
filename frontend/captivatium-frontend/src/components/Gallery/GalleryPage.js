import React, { useEffect, useState } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import Row from 'react-bootstrap/Row';

import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import './Gallery.scss';

export default function GalleryPage() {
    const [images, setImages] = useState([]);

    // Keep track of the original images loaded from the api so we don't lose them when filtering
    const [originalImages, setOriginalImages] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:4000/api/images/all')
            .then((response) => {
                setOriginalImages(response.data);
                setImages(response.data);
            });
    }, [])

    const showCategory = (category) => {
        const items = originalImages.filter((image) => {
            return image.category === category.toString();
        })
        setImages(items);
    }

    return (
        <Container fluid className="gallery-wrapper">
            <Row className="categories-wrapper mt-2">
                <Col sm="12" className="">
                    <ul className="categories list-group list-group-horizontal d-flex justify-content-center">
                        <li className="category-item list-group-item"><button onClick={() => showCategory(0)}>All</button></li>
                        <li className="category-item list-group-item"><button onClick={() => showCategory(1)}>Landscapes</button></li>
                        <li className="category-item list-group-item"><button onClick={() => showCategory(2)}>Portraits</button></li>
                    </ul>
                </Col>
            </Row>
            <Row className="gallery">
                <Col sm="12" className="flex-gallery">
                    { PhotoGallery(images) }
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
                    <Fade up duration={1700} key={item.title}>
                        <Item
                            original={item.src}
                            thumbnail={item.thumbnail}
                            width={item.resolution[0]}
                            height={item.resolution[1]}
                        >
                            {({ ref, open }) => (
                                <div className="filtr-item">
                                    <img ref={ref} onClick={open} src={item.thumbnail} alt={item.title}/>
                                </div>
                            )}
                        </Item>
                    </Fade>
                )
            })}
        </Gallery>
    )
}
