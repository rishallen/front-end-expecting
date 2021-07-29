import React from 'react'; 
import { useState } from 'react';
import './Register.css'
import loginImg from "../../login.png";

const axios = require('axios');

const Register = (props) => {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');
    const [emailReg, setemailReg] = useState('');
    const [statusMessage, setStatusMessage] = useState('')

    const registerUser = () => {
        axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/users`, {
            username: usernameReg,
            password: passwordReg,
            email: emailReg,

        }).then(response => {
            console.log(process.env.REACT_APP_BACKEND_URL);
            setStatusMessage('You have successfully signed up!')
            
        })
        .catch(error => {
            console.log(error)
            setStatusMessage('Sign up failed:(')
        
        })
        .finally(() => {
            console.log("Tried to get registered");
            setUsernameReg('')
            setpasswordReg('')
            setemailReg('')
        })
    }

    return (
        <>
        <div className="body"></div>
            <div className="grad"></div>
            <div className="header">
                <div><span>Expecting</span></div>
            </div>
            <div className="login">
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input type="text" value={usernameReg} autoComplete="off" name="username" placeholder="username" onChange={(e)=> {
                        setUsernameReg(e.target.value);
                        setStatusMessage('');
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input type="text" value={emailReg} autoComplete="off" name="email" placeholder="email" onChange={(e)=> {
                        setemailReg(e.target.value);
                        setStatusMessage('');
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input type="password" value={passwordReg} autoComplete="off" name="password" placeholder="password" onChange={(e)=> {
                        setpasswordReg(e.target.value);
                        setStatusMessage('');
                    }}/>
                </div>
                <div>
                    <input type="button" value="sign-up" onClick={registerUser}/>
                </div>
                <div>
                    {statusMessage}
                </div>
                    
            </div>
        </>
    );
};

export default Register;