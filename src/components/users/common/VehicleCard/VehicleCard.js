import React from 'react';
import { Card} from "react-bootstrap";
import {RiCaravanLine, RiCarLine, RiGasStationFill} from "react-icons/ri";
import {IoIosSnow} from "react-icons/io";
import "./VehicleCard.css"


const VehicleCard = ({vehicle}) => {

     const { id, image, pricePerHour, model, fuelType, airConditioning, doors, luggage } = vehicle;

    const imgSrc = `${process.env.REACT_APP_API_URL}/files/display/${image[0]}`;

    return (
        <Card className="vehicle-card">
            <div className="image-container">
                <Card.Img variant="top" src={imgSrc}/>
                <span className="price">
                    <span>${pricePerHour}</span>/day
                    </span>
            </div>
            <Card.Body>
                <Card.Title>{model}</Card.Title>
                <Card.Text>
                    <ul>
                        <li><RiGasStationFill/>{fuelType}</li>
                        <li><IoIosSnow/>{airConditioning?"Ac Exists":"Ac not exists"}</li>
                        <li><RiCarLine/>{doors}</li>
                        <li><RiCaravanLine/>{luggage}</li>

                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default VehicleCard;