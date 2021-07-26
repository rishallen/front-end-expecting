import React, { useState, useEffect } from "react";
const axios = require('axios');


const NewProviderForm = (props) => {
    const[providers, setProviders] = useState([]);
    
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

    if (!props.user) {
        return <div>please log in</div>
    }

    return (
        <>
            <form id="new-provider-form" onSubmit={onFormSubmit}>
                <div>
                    <label htmlFor="first_name">First name:</label>
                    <input
                        className="new-item-input"
                        name="first_name"
                        value={formFields.first_name}
                        onChange={onFirstNameChange}
                    />                
                </div>
                <div>
                    <label htmlFor="last_name">Last name:</label>
                    <input
                        className="new-item-input"
                        name="last_name"
                        value={formFields.last_name}
                        onChange={onLastNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        className="new-item-input"
                        name="title"
                        value={formFields.title}
                        onChange={onTitleChange}
                    />
                </div>
                <div>
                    <label htmlFor="">Social Media Handle:</label>
                    <input
                        className="new-item-input"
                        name="social_media_handle"
                        value={formFields.social_media_handle}
                        onChange={onSocialMediaHandleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        className="new-item-input"
                        name="description"
                        value={formFields.description}
                        onChange={onDescriptionChange}
                    />
                </div>
                <div>
                    <label htmlFor="street_name">Street:</label>
                    <input
                        className="new-item-input"
                        name="street"
                        value={formFields.street_name}
                        onChange={onStreetNameChange}
                    />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input
                        className="new-item-input"
                        name="city"
                        value={formFields.city}
                        onChange={onCityChange}
                    />
                </div>
                <div>
                    <label htmlFor="state">State:</label>
                    <input
                        className="new-item-input"
                        name="state"
                        value={formFields.state}
                        onChange={onStateChange}
                    />
                </div>
                <div>
                    <label htmlFor="postal_code">Zip Code:</label>
                    <input
                        className="new-item-input"
                        name="postal_code"
                        value={formFields.postal_code}
                        onChange={onPostalCodeChange}
                    />
                </div>
                <div>
                    <label htmlFor="country">Country:</label>
                    <input
                        className="new-item-input"
                        name="country"
                        value={formFields.country}
                        onChange={onCountryChange}
                    />
                </div>
                <input type="submit" className="submit-add"></input>
                {/* {makeNewProvider && <NewProviderForm addProviderCallback={addProvider} />} */}
            </form>
        </>
    );
};
export default NewProviderForm;