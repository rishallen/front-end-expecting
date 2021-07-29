import React from 'react';
import './Footer.scss';

import { FaGithub } from "react-icons/fa";
import { FaFacebook} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";


const Footer = () => {

    return (
        <footer id="areaC" className="footer">
            <div className="footer-content">
                <div className="letterhead">
                    <span>&copy;</span>
                    <span className="name">risha allen</span>
                    <span className="gray">2021</span>
                    <span className="foot-dot">•</span>
                    <span className="gray">all rights reserved</span>
                    
                </div>
            </div>
            <ul className="footer--social-icons">
                <li><FaFacebook /></li>
                <li><FaGithub /></li>
                <li><FaLinkedin/></li>
            </ul>
        </footer>
    );
};


export default Footer;