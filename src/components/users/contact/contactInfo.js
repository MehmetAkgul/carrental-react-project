import React from 'react';
import ContactBar from "../common/header/contactBar";

import "./contactInfo.css"

const ContactInfo = () => {
    return (
        <>
            <h3>Contact Info</h3>
            <div className="contact-info">
                <ContactBar/>
            </div>
        </>
    );
};

export default ContactInfo;