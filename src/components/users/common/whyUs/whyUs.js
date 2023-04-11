import React from 'react';
import {Container} from "react-bootstrap";
import SectionHeader from "../section-header/sectionHeader";
import data from "./whyUs.json"
import "./whyUs.css"

const WhyUs = () => {
    return (
        <section className="why-us">
            <SectionHeader title="Why People Like Us"
                           desc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, sapiente?"/>

            <Container>
                <ul className="row g-5 ">
                    {data.map((item, index) => (
                        <li key={index} className="col-md-4 col-lg-3 col-sm-6">
                            <span>{item.title}</span> <br/>
                            <p>{item.desc}</p> <br/>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default WhyUs;