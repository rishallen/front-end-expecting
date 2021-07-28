import React from "react";
import Login from "../../components/Login/Login";
import '../../App.css';
// import logoImg from "../../logo.png";

import { useState } from 'react';

// Pages
import About from '../../components/About';
import HomePage from '../../components/HomePage';
import NewProviderForm from '../../components/NewProviderForm';
import ProviderList from '../../components/ProviderList';
import PageNotFound from '../../components/PageNotFound';
import Register from '../../components/Login/Register'
import PostList from '../../components/PostList';


import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import {
    Nav,
    // Bars,
    // NavMenu,
    NavBtn,
    // NavLogo,
    NavBtnLink,
} from './NavbarElements';


const Navbar = (props) => {

    const [user, setUser] = useState(null); 

    const [isExpanded, setisExpanded] = useState(false);

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isExpanded: false
    //     };
    // }

    const handleToggle = (e) => {
        e.preventDefault();
        if (isExpanded === true) {
            setisExpanded (false)
        } else {
            setisExpanded(true)
        }
    }

    return (
    <>
    <Router>

    <Nav id="areaA">
        <div className="logo">
            <Link to="/">
                {/* <img src={logoImg} alt='logo' /> */}
                <p>Expecting.com</p>
            </Link>
        </div>
        {/* <Bars />
        <NavMenu> */}
        <nav className="nav">
            <i
                className="fa fa-bars"
                aria-hidden="true"
                onClick={e => handleToggle(e)}
            />
            <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                <li className="nav-item"><Link to="/about"  activeStyle>About</Link></li>
                <li className="nav-item"><Link to="/providerList"  activeStyle>Providers</Link></li>
                <li className="nav-item"><Link to="/newProviderForm"  activeStyle>Provider Form</Link></li>
                <li className="nav-item"><Link to="/post"  activeStyle>Post</Link></li>
                {/* <li className="nav-item"><Link to="/register" className="NavLink" activeStyle>Sign Up</Link></li> */}
                    {/* </NavMenu> */}
                <NavBtn>
                    <NavBtnLink to='/Login'>Login</NavBtnLink>
                </NavBtn>
            </ul>
        </nav>
    </Nav>
    <div id="areaB">
        <Switch>
            {/*All Routes go here*/}
            <Route exact path="/"><HomePage /></Route>
            <Route exact path="/about" ><About /></Route>
            <Route exact path="/providerList" ><ProviderList user={user}/></Route>
            <Route exact path="/newProviderForm" ><NewProviderForm user={user}/></Route>
            <Route exact path="/login" ><Login onloggedin={setUser} /></Route>
            <Route exact path="/register" ><Register /></Route>
            <Route exact path="/post" ><PostList user={user}/></Route>
            <Route exact path="/404" ><PageNotFound /></Route>
            <Route><Redirect to="/404"/></Route>
        </Switch>
    </div>
    </Router>
    </>
    );

};

export default Navbar;