import React, { useState, useEffect } from "react";
import Provider from './Provider'
import Search from './Search'
// import Navbar from "./Navbar/Navbar";
import './ProviderList.css'
import { useHistory } from "react-router-dom";


const axios = require('axios');


const filterProviders = (providers, query, subset) => {
    if (!query && subset==='all') {
        return providers;
    }

    return providers.filter((provider) => {
        const providerName = provider.first_name.toLowerCase();
        
        const nameCheck = (!query || providerName.includes(query))

        const titleCheck = (subset==='all' || provider.title.toLowerCase().includes(subset))
        
        return nameCheck && titleCheck 
    });
    // const filteredresults = providers.filter(provider => provider.title.toLowerCase().includes(event.target.value))
};


const ProviderList = (props) => {
    
    const[providers, setProviders] = useState([]);
    const[subset, setSubset] = useState('all');
    const history = useHistory(); 

    // const[selectedProvider, setSelectedProvider] = useState({
    //     provider_id: null,
    //     first_name: '', 
    //     last_name: '',
    //     title: '',
    //     social_media_handle: '',
    //     description: '',
    //     addresses: ''
    // });

    const[makeNewProvider, setMakeNewProvider] = useState(false);

    const getProviders = () => {
        axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/providers`)
        .then(response => {
            console.log(process.env.REACT_APP_BACKEND_URL);
            setProviders(response.data);
            // if (response.data.length > 0 ){
            //     console.log(response.data)
            //     setSelectedProvider(response.data);
            // }
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => console.log("Tried to get providers"));  
    }
    
    useEffect( () => {
        getProviders();
    }, []);

    const onNewProviderButtonClick  = event => {
    setMakeNewProvider(true);
    }

    const addProvider = ({first_name, last_name, title, social_media_handle, description, addresses}) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/providers`,{first_name, last_name, title, social_media_handle, description, addresses})
        .then( response => {
            console.log(response.data);
            getProviders();
        })
        .catch(error => console.log(error))
        .finally('Tried to upload your information')
    }
    
    const onProviderSelect = (event) => {
        // if event.target.value = all then dont filter!
        const subset = event.target.value
        
        setSubset(subset)
        // if SelectedProviders.practitiones.title = e.target.value
        // console.log("OnProviderSelect about to axios call")
    //     axios
    //         .get(`${process.env.REACT_APP_BACKEND_URL}/providers/${event.target.value}`)
    //         .then( response => {
    //             setSelectedProvider(response.data.provider);
    //             console.log(response.data)
    //         })
    //         .catch( error => console.log(error))
    //         .finally("finished axios attem")
    }

    const getCityState = () => {
        axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/providers/<provider_id>`)
        .then(response => {
            console.log(process.env.REACT_APP_BACKEND_URL);
            setProviders(response.data);
            // if (response.data.length > 0 ){
            //     console.log(response.data)
            //     setSelectedProvider(response.data);
            // }
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => console.log("Tried to get providers"));  
    }

    const [searchQuery, setSearchQuery] = useState('');
    const filteredProviders = filterProviders(providers, searchQuery, subset);

    return (
        <>
            <section className="provider-container">
                <h2 className="providers-header itemB">Doulas And Midwives To Follow — Whether You're Expecting Or Not</h2>
                    <div className="custom-select">
                        <select className="provider-list-select provider-btn transparent_btn:hover itemA" value={subset} onChange={onProviderSelect}>
                            <option value="all">all</option>
                            <option value="doula">doula</option>
                            <option value="midwife">midwife</option>
                        </select>
                    <Search className="search-list-providerList"
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </div>
            </section>

            <div>
                {filteredProviders.map( provider => 
                    <Provider 
                        key={provider.provider_id} 
                        provider_id={provider.provider_id} 
                        first_name={provider.first_name} 
                        last_name={provider.last_name} 
                        title={provider.title} 
                        social_media_handle={provider.social_media_handle} 
                        description={provider.description} 
                        address={provider.address}
                        user={props.user}
                        addProvider={addProvider}
                        message={() => 
                            history.push("/post")
                            // console.log("hello")
                        } 
                    />
                )}
            </div>
        </>
    );
};

export default ProviderList;
