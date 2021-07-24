import { useState } from 'react';

import './App.css';
// Pages
import About from './components/About';
import ProviderList from './components/ProviderList';
import HomePage from './components/HomePage';
import NewProviderForm from './components/NewProviderForm';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login/Login'
import Register from './components/Login/Register'
import Post from './components/Post';
import Footer from './components/Footer';
// import Preferences from './components/Preferences';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";



function App() {

  return (

    <div className="wrapper">
      <header className="page-header">
        <h1>
          <span className="h1-line1">Doula</span> <span className="h1-line2">Registry</span>
        </h1>
      </header>

      <main id="main-content">
        <Router>
          <section className="navbar-menu">
            <nav className="navbar">
                <div className="nav-logo" class="one"><Link to="/" className="nav-link">Home</Link></div>
                <ul className="nav-menu">
                  {/* <li><Link to="/provider">Provider</Link></li> */}
                  <li className="nav-item" ><Link to="/about" className="nav-link">About</Link></li>
                  <li className="nav-item" ><Link to="/providerList" className="nav-link">Providers</Link></li>
                  <li className="nav-item" ><Link to="/newProviderForm" className="nav-link">Provider Form</Link></li>
                  <li className="nav-item" ><Link to="/Login" className="nav-link">Login </Link></li>
                  <li className="nav-item" ><Link to="/Register" className="nav-link">Register</Link></li>
                  <li className="nav-menu"><Link to="/post" className="nav-link">Post</Link></li>
                </ul>
                <div className="hamburger">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
              </nav>
            </section>
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
                <Login />
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
    </div>
  );
}

export default App;
