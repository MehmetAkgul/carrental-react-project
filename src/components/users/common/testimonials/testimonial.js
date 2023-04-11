import React from 'react';

const Testimonial = ({message, name,title }) => {
    return (
        <div className="testimonial">
            <p>{message}</p>
            <h5>{name}</h5>
            <em>{title}</em>
        </div>
    );
};

export default Testimonial;