import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Col, Container, Row} from "react-bootstrap";
import json from './testimonials.json'
import 'swiper/css'
import 'swiper/css/pagination'
import './testimonials.css'
import Testimonial from "./testimonial";
import {Pagination} from "swiper";
import Counters from "./counters";

const Testimonials = () => {
    return (
        <div>
            <section className="testimonials">
                <Container>
                <Row >
                    <Col md={6}>
                        <h3>Testimonials</h3>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{clickable: true}}
                        >

                            {json.map((testimonial, index) => (
                                <SwiperSlide key={index}><Testimonial {...testimonial} /></SwiperSlide>
                            ))}

                        </Swiper>

                    </Col>
                    <Col md={6}>
                        <Counters/>
                    </Col>
                </Row>
                </Container>
            </section>
        </div>
);
};

export default Testimonials;