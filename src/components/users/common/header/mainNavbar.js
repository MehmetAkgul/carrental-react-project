import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import {RiCarLine, RiHome2Line} from "react-icons/ri"
import './mainNavbar.css'
import UserMenu from "./userMenu";

const MainNavbar = () => {

    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <Navbar expand="lg" className="main-navbar" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    Logo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className={currentPath==="/" ? "active" : ""}> <RiHome2Line/> Home</Nav.Link>
                        <Nav.Link as={Link} to="/vehicles" className={currentPath==="/vehicles" ? "active" : ""}> <RiCarLine/> Cars</Nav.Link>
                        <Nav.Link as={Link} to="/about" className={currentPath==="/about" ? "active" : ""}>About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className={currentPath==="/contact" ? "active" : ""}>Contact</Nav.Link>
                        <UserMenu/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNavbar;