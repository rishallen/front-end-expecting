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
        addresses: ''
    });
    const[makeNewProvider, setMakeNewProvider] = useState(false);
    
    const getProviders = () => {
        axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/providers`)
        .then(response => {
            console.log(process.env.REACT_APP_BACKEND_URL);
            setProviders(response.data);
            if (response.data.length > 0 ){
                setFormFields(response.data[0]);
            }
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
    const onAddressesChange = (event) => {
        setFormFields({
            ...formFields,
            addresses: event.target.value
        })
    }

// this is what happens when the button clicks

    const onFormSubmit = ({first_name, last_name, title, social_media_handle, description, addresses}) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/providers`,{first_name, last_name, title, social_media_handle, description, addresses})
        .then( response => {
            console.log(response.data);
            getProviders();
        })
        .catch(error => console.log(error))
        .finally('Tried to upload your information')
    }

    

    return (
        <>
            <form id="new-provider-form">
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
                    <label htmlFor="addresses">Address:</label>
                    <input
                        className="new-item-input"
                        name="addresses"
                        value={formFields.addresses}
                        onChange={onAddressesChange}
                    />
                </div>
                <button className="submit-add" onClick={onFormSubmit}>Submit</button>
                {/* {makeNewProvider && <NewProviderForm addProviderCallback={addProvider} />} */}
            </form>
        </>
    );
};
export default NewProviderForm;