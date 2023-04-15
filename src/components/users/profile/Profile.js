import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FaUserCircle} from "react-icons/fa";
import {useStore} from "../../../stores";
import ProfileForm from "./ProfileForm";
import PasswordForm from "./PasswordForm";

const Profile = () => {
    const {userState} = useStore();
    const {user} = userState;
    return (
        <Container>
            <Row className="g-5">
                <Col lg={2} className="text-center">
                    <FaUserCircle size="120"/>
                    <h2>{`${user.firstName} ${user.lastName} `}</h2>
                    <em>{user.email}</em>
                </Col>
                <Col lg={5}>
                    <h3>Update Profile</h3>
                    <ProfileForm user={user}/>
                </Col>
                <Col lg={5}>
                    <h3>Update Password</h3>
                    <PasswordForm/>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;