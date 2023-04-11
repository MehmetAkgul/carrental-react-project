import React, {useState} from 'react';
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import "./auth.css"
import logo from "../../../assets/img/logo/logo.png"
import {RiCloseCircleLine} from "react-icons/ri"
import {useNavigate} from "react-router-dom";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";


const Auth = () => {
    const navigate = useNavigate();
    const [defaultTab, setDefaultTab] = useState("login")
    return (
        <Container fluid className="auth">
            <Row>
                <Col md={7} className="right">
                    <img src={logo}/>
                    <RiCloseCircleLine className="closeBtn" onClick={() => navigate - 1}/>
                </Col>
                <Col md={5} className="left">
                    <Tabs
                        activeKey={defaultTab}
                        onSelect={(k) => setDefaultTab(k)}
                        className="mb-3">
                        <Tab eventKey="login" title="Login">
                            <LoginForm/>
                        </Tab>
                        <Tab eventKey="register" title="Register">
                            <RegisterForm setDefaultTab={setDefaultTab}/>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
};

export default Auth;