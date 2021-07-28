import { useState } from 'react';
import PropTypes from 'prop-types';
import './Provider.css';
import axios from 'axios';

const Provider = (props) => {
    console.log(props)

    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [email, setEmail] = useState("");

    const onFormSubmit= (e) => {
        e.preventDefault();
        const verb=(props.user.provider_id)?'patch':'post'
        const providerId=(props.user.provider_id)?`/${props.user.provider_id}`:''

        const {name, comment, email}=e
        axios[verb](`${process.env.REACT_APP_BACKEND_URL}/providers/${providerId}/users/${props.user_id}/posts`,{name, comment, email})
        .then( response => {
            console.log(response.data.provider.provider_id);
            props.user.provider_id = response.data.provider.provider_id
        })
        .catch(error => console.log(error))
        .finally('Unable to submit your message, please try again!')

        // call my endpoint
        // post request
        // pass down a user, user = props.user
        // provider_id
    }

    const onChange = (e) => {
        if(e.target.name === "name") {
            setName(e.target.value)
        } else if(e.target.name === "comment") {
            setComment(e.target.value)
        } else if (e.target.email === "email") {
            setEmail(e.target.value)
        }
    }

    const toggleShowForm = () => {
        setShowForm(!showForm)
    }

    const formatAddress = (addressObj) => {
        return `${addressObj.street_name}, ${addressObj.city}, ${addressObj.state}, ${addressObj.country}, ${addressObj.postal_code}`;
        
    }

    return (
        <div>
            <ul>
                <li>Provider:</li>
                <li>Name: {props.first_name} {props.last_name}</li>
                <li>Service: {props.title}</li>
                <li>Social Media Handle: {props.social_media_handle}</li>
                <li>Description: {props.description}</li>
                <li>Address: {formatAddress(props.address)}</li>
                <button onClick={toggleShowForm}>send message</button>
                { showForm && 
                    <form onSubmit={onFormSubmit}> 
                        <label>
                            name:
                                <input type="text" value={name} name="name" onChange={e => onChange(e)}/> 
                        </label>
                        <label>
                            comment:
                            <input type="text" value={comment} name="comment" onChange={e => onChange(e)}/> 
                        </label>
                        <label>
                            email:
                            <input type="text" value={email} name="email" onChange={e => onChange(e)}/> 
                        </label>
                        <button type="submit">submit</button>
                    </form>} 
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





