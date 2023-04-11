import React from 'react';
import {RiFacebookCircleLine, RiInstagramLine, RiLinkedinLine, RiTwitterLine, RiWhatsappLine} from "react-icons/ri";

const SocialBar = () => {
    return (
        <ul className="social-bar">
            <li><a href="#" target="_blank"><RiFacebookCircleLine/></a></li>
            <li><a href="#" target="_blank"><RiTwitterLine/></a></li>
            <li><a href="#" target="_blank"><RiInstagramLine/></a></li>
            <li><a href="#" target="_blank"><RiWhatsappLine/></a></li>
            <li><a href="#" target="_blank"><RiLinkedinLine/></a></li>
        </ul>
    );
};

export default SocialBar;