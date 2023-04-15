import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useStore} from "../../../../stores";
import SectionHeader from "../../common/section-header/sectionHeader";
import VehicleCard from "../../common/VehicleCard/VehicleCard";


const PopularCars = () => {

    const {vehicleState} = useStore()
    const {vehicles} = vehicleState

    return (
        <section>
            <SectionHeader title="Popular Cars" desc=" Lorem ipsum dolor sit amet."/>
            <Container>
                <Row className="g-4">
                    {
                        vehicles.slice(0,8).map((vehicle, index) => (
                            <Col key={index} md={6} lg={3}>
                                <VehicleCard vehicle={vehicle}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default PopularCars;