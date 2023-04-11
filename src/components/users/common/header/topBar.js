import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SocialBar from "./socialBar";
import ContactBar from "./contactBar";
import './topBar.css'

const TopBar = () => {
    return (
        <div className="top-bar">
            <Container>
                <Row>
                    <Col lg={3} className="d-none d-lg-block"><SocialBar/></Col>
                    <Col lg={9}><ContactBar/></Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBar;