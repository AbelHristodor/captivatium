import React, { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

import "./Contact.scss";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/email/send', { name, email, message })
            .then((data) => {
                if (data.status === 200 && data.data.response.startsWith('2')) { 
                    toast.success("Message was sent successfully ✌");
                    setName('');
                    setEmail('');
                    setMessage('');
                } else {
                    toast.error("Upss 😫 Something went wrong.. Blame it on the administrator, try again later 😄 ")

                }
            }).catch((e) => {
                toast.error("Upss 😫 Something went wrong.. Blame it on the administrator, try again later 😄 ")
            })
    }

    return (
        <Container fluid>
            <Row>
                <Col sm="12" className="contact-wrapper">
                    <div className="text-wrapper">
                        <h1>Want to get in touch?</h1> 
                    </div>

                    <div className="form-wrapper">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                                <label>Name</label>
                            </div>
                            <div className="form-group">
                                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label>Email</label>
                            </div>
                            <div className="form-group">
                                <input type="text" required value={message} onChange={(e) => setMessage(e.target.value)}/>
                                <label>Message</label>
                            </div>
                            <button type="submit" className="send">Send</button>
                        </form>
                        <Toaster
                            toastOptions={{
                                icon: '👏',
                                style: {
                                    borderRadius: '10px',
                                    background: '#333',
                                    color: '#fff', 
                                },
                            }}
                        />
                    </div>
                </Col>
                <Col>
                
                </Col>
            </Row>
            
        </Container>
    )
}
