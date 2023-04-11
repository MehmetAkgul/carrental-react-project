import React from 'react';
import {Container} from "react-bootstrap";

const Map = () => {
    return (
        <Container>

            <iframe title="usAddress"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.782374156611!2d-80.06630348563036!3d26.52712278329518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8df24e07e37bd%3A0xd9744c833b1edb21!2sCity%20of%20Boynton%20Beach!5e0!3m2!1str!2str!4v1671267040688!5m2!1str!2str"
                width="100%" height="450"   allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">

            </iframe>
        </Container>
    );
};

export default Map;