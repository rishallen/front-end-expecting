import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import background from './background.png'



function App() {

  return (
    <>
      <main id="container">
        <Router>
          <Navbar></Navbar>
        </Router>
        <div style={{backgroundImage: `url(${background})`}} className="body-container"></div>

        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
