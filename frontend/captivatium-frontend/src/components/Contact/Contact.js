import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import "./Contact.scss";

export default function Contact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        console.log(name);
        console.log(email);
        console.log(message);
    }

    return (
        <Container fluid>
            <Row>
                <Col md="12" sm="12" className="contact-wrapper">
                    <div className="text-wrapper">
                        <h1>Want to get in touch?</h1> 
                    </div>

                    <div className="form-wrapper">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group">
                                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                                <label>Name</label>
                            </div>
                            <div class="form-group">
                                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label>Email</label>
                            </div>
                            <div class="form-group">
                                <textarea type="text" required value={message} onChange={(e) => setMessage(e.target.value)}/>
                                <label>Message</label>
                            </div>
                            <button type="submit" class="send">Send</button>
                        </form>
                        
                    </div>
                </Col>
                <Col>
                
                </Col>
            </Row>
            
        </Container>
    )
}
