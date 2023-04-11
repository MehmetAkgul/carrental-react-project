import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import logo from "../../../../assets/img/logo/logo.png"
import {Link} from "react-router-dom";
import SocialBar from "../header/socialBar";
import ContactBar from "../header/contactBar";
import './footer.css'

const Footer = () => {
    return (
        <section className="footer">
            <Container>
                <Row>
                    <Col md={6}>
                        <h4>About Us</h4>
                        <img src={logo} className="img-fluid"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            quibusdam rem similique sint veniam voluptatum!
                        </p>
                        <SocialBar/>
                    </Col>
                    <Col md={3}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/vehicle">Cars</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>

                        </ul>
                    </Col>
                    <Col md={3}>
                        <h4>Contact Us</h4>
                        <ContactBar/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;