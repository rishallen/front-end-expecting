import React from "react"; 
import '../../App.css';
import { useState } from 'react';
import styled from 'styled-components';
import {  FaBars } from 'react-icons/fa';
// Pages
import About from '../../components/About';
import HomePage from '../../components/HomePage';
import NewProviderForm from '../../components/NewProviderForm';
import ProviderList from '../../components/ProviderList';
import PageNotFound from '../../components/PageNotFound';
import Login from '../../components/Login/Login'
import Register from '../../components/Login/Register'
import Post from '../../components/Post';
import Footer from '../../components/Footer';
import Bars from './Bars';
import NavMenu from './NavMenu';
// import Preferences from './components/Preferences';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

// export const Nav = styled.nav 
//     background: #000;



const Navbar = () => {
    
    const [user, setUser] = useState(null); 

    return (
    <>
    <header>
    </header>
    <main id="main-content">
        <Router>
            <Link to="/">
                Logo
            </Link>
                <Bars />
                <Link>
                {user && <><span>{user.username}</span><button onClick={ () => setUser(null)}>log out</button></>}
                    <ul className="nav-menu">
                        <li className="nav-item" ><Link to="/about" activeStyle>About</Link></li>
                        <li className="nav-item" ><Link to="/providerList" activeStyle>Providers</Link></li>
                        <li className="nav-item" ><Link to="/newProviderForm" activeStyle>Provider Form</Link></li>
                        <li className="nav-item" ><Link to="/Login" activeStyle>Login </Link></li>
                        <li className="nav-menu"><Link to="/post" activeStyle>Post</Link></li>
                        <li className="nav-item" ><Link to="/Register" activeStyle>Register</Link></li>
                    </ul>
                </Link>
            <Switch>
                {/*All Routes go here*/}
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route> 
                <Route exact path="/providerList">
                    <ProviderList />
                </Route>
                <Route exact path="/newProviderForm">
                    <NewProviderForm />
                </Route>
                <Route exact path="/login">
                    <Login onloggedin={setUser} />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/post">
                    <Post />
                </Route>
                {/* <Route exact path="/dashboard">
                    <Dashboard />
                </Route> */}
                <Route exact path="/404">
                    <PageNotFound />
                </Route>
                <Route>
                    <Redirect to="/404"/>
                </Route>
            </Switch>
        </Router>
        </main>
    <Footer></Footer>
    </>
    );
};

export default Navbar;