import React, { useState, useEffect } from "react";
import PostList from './PostList'
import "./NewProviderForm.scss";
import Login from "./Login/Login";

import NewProviderFormElements from './NewProviderFormElements'

const axios = require('axios');


const NewProviderForm = (props) => {
    const[providers, setProviders] = useState([]);
    const [name, setName] = useState("");
    const [showForm, setShowForm] = useState(false);

    const toggleShowForm = () => {
        setShowForm(!showForm)
    }
    
    const [formFields, setFormFields] = useState({
        first_name: '',
        last_name: '',
        title: '',
        social_media_handle: '',
        description: '',
        street_name: '',
        state: '',
        city: '',
        country: '',
        postal_code: ''
    });
    const[makeNewProvider, setMakeNewProvider] = useState(false);
    
    const getProviders = () => {
        //  if props.user is null then return null for the entire user
        if (!props.user?.provider_id) {
            return
        }
        axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/providers/${props.user.provider_id}`)
        .then(response => {
            console.log(process.env.REACT_APP_BACKEND_URL);
            // setProviders(response.data.provider);
            // if (response.data.length > 0 )

            setFormFields({...response.data.provider, ...response.data.provider.address});

    
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => console.log("Tried to get providers"));  
    }
    const onNewProviderButtonClick  = event => {
    setMakeNewProvider(true);
    }
    
    const onProviderSelect = (event) => {
        console.log("OnProviderSelect about to axios call")
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/providers/${event.target.value}`)
            .then( response => {
                setFormFields(response.data.provider);
                console.log(response.data)
            })
            .catch( error => console.log(error))
            .finally("finished axios attem")
    }
    useEffect( () => {
        getProviders();
    }, []);

    const onFirstNameChange = (event) => {
        setFormFields({
            ...formFields,
            first_name: event.target.value
        })
    };
    const onLastNameChange = (event) => {
        setFormFields({
            ...formFields,
            last_name: event.target.value
        })
    };
    const onTitleChange = (event) => {
        setFormFields({
            ...formFields,
            title: event.target.value
        })
    };
    const onSocialMediaHandleChange = (event) => {
        setFormFields({
            ...formFields,
            social_media_handle: event.target.value
        })
    };
    const onDescriptionChange = (event) => {
        setFormFields({
            ...formFields,
            description: event.target.value
        })
    };
    const onStreetNameChange = (event) => {
        setFormFields({
            ...formFields,
            street_name: event.target.value
        })
    
    };
    const onCityChange = (event) => {
        setFormFields({
            ...formFields,
            city: event.target.value
        })
    
    }
    const onStateChange = (event) => {
        setFormFields({
            ...formFields,
            state: event.target.value
        })
    
    }
    const onPostalCodeChange = (event) => {
        setFormFields({
            ...formFields,
            postal_code: event.target.value
        })
    
    }
    const onCountryChange = (event) => {
        setFormFields({
            ...formFields,
            country: event.target.value
        })
    
    }

// this is what happens when the button clicks
    const onFormSubmit = (event) => {
        event.preventDefault();
        const verb=(props.user.provider_id)?'patch':'post'
        const providerId=(props.user.provider_id)?`/${props.user.provider_id}`:''

        const {first_name, last_name, title, social_media_handle, description, street_name, state, city, postal_code, country}=formFields
        axios[verb](`${process.env.REACT_APP_BACKEND_URL}/providers${providerId}`,
            {first_name, last_name, title, social_media_handle, description, 
                address: {street_name, city, state, postal_code, country }, user_id:props.user.user_id})
        .then( response => {
            console.log(response.data.provider.provider_id);
            props.user.provider_id = response.data.provider.provider_id
        })
        .catch(error => console.log(error))
        .finally('Tried to upload your information')
    }

    // User check:
    if (!props.user) {
        return <div>please log in</div>
    }

    return (
        <>
            <div className="container">
                <h1 className="provider-greeting">Hello</h1>
                <span>
                    <h1 className="provider-name">{props.user.username}</h1>
                </span>
            </div>
            <section id="providerformContainer">
                <div className="wrapper">
                    <div id="formAreaA">
                        <p className="title">Create Your Profile</p>
                        <button className="provider-profile-btn transparent_btn" onClick={toggleShowForm}>Create</button>
                        { showForm &&
                            <form action="#" className="contact-form-row" onSubmit={onFormSubmit}>
                                <div className="user-deatails">
                                    <div className="input-box">
                                        <label htmlFor="first_name"><span className="details">First name:</span></label>
                                        <input
                                            id="first_name"
                                            // className="new-item-input"
                                            className="input-text js-input"
                                            type="text" required
                                            // name="_name"
                                            value={formFields.first_name}
                                            onChange={onFirstNameChange}
                                            />                
                                        </div>
                            
                                <div className="input-box">
                                    <label htmlFor="last_name"><span className="details">Last name:</span></label>
                                    <input
                                        // className="new-item-input"
                                        id="last_name"
                                        className="input-text js-input" 
                                        type="text" required
                                        // name="last_name"
                                        value={formFields.last_name}
                                        onChange={onLastNameChange}
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="title"><span className="details">Title:</span></label>
                                    <input
                                        className="new-item-input"
                                        id="title"
                                        type="text" required
                                        value={formFields.title}
                                        onChange={onTitleChange}
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor=""><span className="details">Social Media Handle:</span></label>
                                    <input
                                        className="new-item-input"
                                        id="social_media_handle"
                                        type="text" required
                                        value={formFields.social_media_handle}
                                        onChange={onSocialMediaHandleChange}
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="street_name"><span className="details">Street:</span></label>
                                    <input
                                        className="new-item-input"
                                        id="street"
                                        type="text" required
                                        value={formFields.street_name}
                                        onChange={onStreetNameChange}
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="city"><span className="details">City:</span></label>
                                    <input
                                        className="input-text js-input"
                                        id="city"
                                        type="text" required
                                        value={formFields.city}
                                        onChange={onCityChange}
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="state"><span className="details">State:</span></label>
                                    <input
                                        className="input-text js-input"
                                        id="state"
                                        type="text" required
                                        value={formFields.state}
                                        onChange={onStateChange}
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="postal_code"><span className="details">Zip Code:</span></label>
                                    <input
                                        className="input-text js-input"
                                        id="postal_code"
                                        type="text" required
                                        value={formFields.postal_code}
                                        onChange={onPostalCodeChange}
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="country"><span className="details">Country:</span></label>
                                    <input
                                        className="input-text js-input"
                                        id="country"
                                        type="text" required
                                        value={formFields.country}
                                        onChange={onCountryChange}
                                    />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="description"><span className="details">Description:</span></label>
                                    <input
                                        className="input-text js-input"
                                        id="description"
                                        type="text" required
                                        value={formFields.description}
                                        onChange={onDescriptionChange}
                                    />
                                </div>
                                </div>
                                <div className="buttonForm">
                                    <input type="submit" className="submit-btn transparent_btn" value="Submit"></input>
                                    {/* {makeNewProvider && <NewProviderForm addProviderCallback={addProvider} />} */}
                                </div>
                            </form> }
                        </div> 
                    <div id="formAreaB">
                        <PostList
                            provider={props.user}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
export default NewProviderForm;