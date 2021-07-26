import { useState } from 'react';
import PropTypes from 'prop-types';
import './Provider.css';

const Provider = (props) => {
    console.log(props)

    const formatAddress = (addressObj) => {
        
        return `${addressObj.street_name}, ${addressObj.city}, ${addressObj.state}, ${addressObj.country}, ${addressObj.postal_code}`;
        
    }

    return (
        <div>
            <ul>
                <li className>Provider:</li>
                <li>Name: {props.first_name} {props.last_name}</li>
                <li>Service: {props.title}</li>
                <li>Social Media Handle: {props.social_media_handle}</li>
                <li>Description: {props.description}</li>
                <li>Address: {formatAddress(props.address)}</li>
                <button onClick={props.message}>send message</button>
            </ul>
        </div>
    );
};

Provider.propTypes = {
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    social_media_handle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
    message: PropTypes.any.isRequired
};

export default Provider;





