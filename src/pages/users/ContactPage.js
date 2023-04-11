import React from 'react'
import PageHeader from "../../components/users/common/pageheader/pageHeader";
import Spacer from "../../components/users/common/spacer/spacer";
import Map from "../../components/users/contact/map";
import {Col, Container, Row} from "react-bootstrap";
import ContactForm from "../../components/users/contact/contactForm";
import ContactInfo from "../../components/users/contact/contactInfo";

const ContactPage = () => {
    return (
        <>
            <PageHeader title="Contact"/>
            <Spacer/>
            <Map/>
            <Spacer/>
            <Container  className="gap-5">
                <Row>
                    <Col md={6}> <ContactForm/></Col>
                    <Col md={6}> <ContactInfo/></Col>
                </Row>
            </Container>
            <Spacer/>

        </>
    )
}

export default ContactPage