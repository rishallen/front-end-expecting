import React from "react";
import { useState } from 'react';
import './Login.scss';  
import loginImg from "../../login.png";

import { useHistory } from "react-router-dom";

const axios = require('axios');


const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setpassword] = useState('');
    const history = useHistory(); 

    const [loginStatus, setloginStatus] = useState('');

    const loginUser = () => {
        axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
            username: username,
            password: password,
        })
        .then(response => {
            console.log(process.env.REACT_APP_BACKEND_URL);
            setUsername(response.data);
            
            if (response.data ){
                history.push("/newProviderForm");
            }
            // if (response.data.message){
            //     setloginStatus(response.data.[0].username);
            // }

        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => console.log("Wrong user name and password combination"));
    }

    return (
        <div className="base-container" ref={props.containerRef}>
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" autoComplete="off" name="username" placeholder="username" onChange={(e)=> {
                            setUsername(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" autoComplete="off" name="password" placeholder="password" onChange={(e)=> {
                            setpassword(e.target.value);
                        }}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={loginUser}>
                    Login
                </button>
            </div>
            <h3>{loginStatus}</h3>
        </div>
    );
};

export default Login;