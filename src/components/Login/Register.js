import React from 'react'; 
import { useState } from 'react';
import loginImg from "../../login.png";

const axios = require('axios');

const Register = (props) => {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');

    const registerUser = () => {
        axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/register`, {
            username: usernameReg,
            password: passwordReg,

        }).then(response => {
            console.log(process.env.REACT_APP_BACKEND_URL);
            setUsernameReg(response.data);
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => console.log("Tried to get registered"));
    }

    return (
        <div className="base-container" ref={props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" autoComplete="off" name="username" placeholder="username" onChange={(e)=> {
                            setUsernameReg(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Email</label>
                        <input type="text" autoComplete="off" name="password" placeholder="password" onChange={(e)=> {
                            setpasswordReg(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" autoComplete="off" name="password" placeholder="password" onChange={(e)=> {
                            setpasswordReg(e.target.value);
                        }}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={registerUser}>
                    Register
                </button>
            </div>
        </div>
    );
};

export default Register;