import React from "react";
import { useState } from 'react';
import './Login.scss';
import loginImg from "../../login.png";
import { useHistory } from "react-router-dom";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";




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
                props.onloggedin(response.data.user)

            }
            // return (
            //     <Link to="/newProviderForm" activeStyle>Provider Form</Link>
            // )
            history.push("/newProviderForm");
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
        <>
            <div class="body"></div>
                <div class="grad"></div>
                <div class="header">
                    <div><span>Expecting</span></div>
                </div>
                <div class="login">
                    {/* <div className="form"> */}
                        <div className="form-group">
                            <label htmlFor="username"></label>
                            <input type="text" autoComplete="off" value={username} name="username" placeholder="username" onChange={(e)=> {
                                setUsername(e.target.value);
                            }}/> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"></label>
                            <input type="password" autoComplete="off" value={password} name="password" placeholder="password" onChange={(e)=> {
                                setpassword(e.target.value);
                            }}/>
                        </div>
                    {/* </div> */}
                    <input type="button" value="login" onClick={loginUser}/>
                    <ul>
                        <li class="signup">Not a member? 
                            <Link to="/register" className="NavLink" activeStyle>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            <div>
                <h3>{loginStatus}</h3>
            </div>
        </>
    );
};

export default Login;