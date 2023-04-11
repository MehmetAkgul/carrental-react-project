import React from 'react';
import './bookbar.css';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Bookbar = () => {
    return (
        <div className="book-bar">
            <h3>Explore our cars and book now</h3>
            <div>
                <Button variant={"secondary"} as={Link} to="/vehicles">BOOK NOW</Button>
            </div>
        </div>
    );
};

export default Bookbar;