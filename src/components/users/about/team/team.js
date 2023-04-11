import React from 'react';
import data from "./team.json"
import "./team.css"
import SectionHeader from "../../common/section-header/sectionHeader";
import {Container} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import TeamMember from "./team-member";


const Team = () => {
    return (
        <section>
            <SectionHeader title="Our Team"
                           desc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, sapiente?"/>
            <Container>
                <Swiper spaceBetween={50} slidesPerView={3}  >
                    {
                        data.map((item, index) =>
                            <SwiperSlide key={index}>
                                <TeamMember{...item}/>
                            </SwiperSlide>
                        )
                    }

                </Swiper>
            </Container>
        </section>
    )
        ;
};

export default Team;