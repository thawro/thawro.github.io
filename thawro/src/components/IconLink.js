import React from 'react';
import { Link } from 'react-router-dom';

const IconLink = ({ to, icon, label }) => {
    return (
        <Link to={to} >
            {icon}
            {label && <span>{label}</span>}
        </Link>
    );
};

export default IconLink;