import { useState } from 'react';
import PropTypes from 'prop-types';
import './Provider.css';
import axios from 'axios';
import { notValidDateWarning } from 'stream-chat-react';

const Provider = (props) => {
    console.log(props)

    const [showForm, setShowForm] = useState(false);
    const [comment, setComment] = useState("");
    

    const onFormSubmit= (e) => {
        e.preventDefault();
        // if provider id then do a post, if not do nothing
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/providers/${props.provider_id}/users/${props.user.user_id}/posts`,{"message": comment})
        .then( response => {
            setComment('');
            //add messaging to the user that their comment was submitted succesfully, this will involve state
        })
        .catch(error => console.log(error))
        .finally('Unable to submit your message, please try again!')

        // call my endpoint
        // post request
        // pass down a user, user = props.user
        // provider_id
    }

    const onChange = (e) => {
        if(e.target.name === "comment") {
            setComment(e.target.value)
        }
    }

    const toggleShowForm = () => {
        setShowForm(!showForm)
    }

    const formatAddress = (addressObj) => {
        return `${addressObj.street_name}, ${addressObj.city}, ${addressObj.state}, ${addressObj.country}, ${addressObj.postal_code}`;
        
    }

    return (
        <section className="card-holder-container">
            <div className="provider-container-items box-shadow">

                <ul className="provider-wrapper">
                    {/* <li className="provider-item">Provider:</li> */}
                    <li className="provider-item">{props.first_name} {props.last_name}</li>
                    <li className="provider-item">{props.title}</li>
                    <li className="provider-item">{props.social_media_handle}</li>
                    <li className="provider-item">{formatAddress(props.address)}</li>
                    { props.user &&
                        <button onClick={toggleShowForm}>send message</button>} 

                    { showForm && 
                    <form onSubmit={onFormSubmit}> 
                        <label>
                            comment:
                            <input type="text" name="comment" onChange={e => onChange(e)}/> 
                        </label>
                        <button type="submit">submit</button>
                    </form>} 
                    <li className="provider-item description extra">{props.description}</li>
                </ul>
            </div>
        </section>
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





