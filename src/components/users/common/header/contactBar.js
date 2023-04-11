import React from 'react';
import {RiMailOpenLine, RiMapPinLine, RiPhoneLine} from "react-icons/ri";

const ContactBar = () => {
    return (
        <ul className="contact-bar">
            <li  >
                <RiPhoneLine/>
                <div>
                    <a href="tel:15616085409">1-561-608-5409</a>
                    <a href="tel:5616085409">1-561-608-5409</a>
                </div>
            </li>
            <li className="d-none d-lg-flex">
                <RiMailOpenLine />
                <div>
                    <a href="mailto:info@carrental.com">info@carrental.com</a> <br/>
                    <a href="mailto:support@carrental.com">support@carrental.com</a>
                </div>
            </li>
            <li className="d-none d-sm-flex">
                <RiMapPinLine />
                <div>
                    3444 Wyatt Street, Boynton Beach,  33436
                    <br/>
                    Florida USA
                </div>
            </li>

        </ul>
    );
};

export default ContactBar;