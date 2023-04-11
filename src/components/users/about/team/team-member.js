import React from 'react';
import {Card} from "react-bootstrap";

const TeamMember = ({image,name,title}) => {
    const imgSrc=require(`../../../../assets/img/team/${image}`);

    return (
        <Card style={{width: "18rem"}}>
            <Card.Img variant="top" src={imgSrc}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {title}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default TeamMember;