import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

// import { BurgerIcon } from './'
import styled from "styled-components";


export const Nav = styled.nav`
    width: 100%;
    // z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    // height: 140px;
    // margin-bottom: 60px;
    // background: #f8f8f8;
    background: red;


    .logo a {
        padding-top: 33px;
        position: relative;
        left: 35px;
        display: flex;
        flex-direction: column;
        clear: both;
        padding-bottom: 30px;
        text-decoration: none;
        font-family: 'Lobstor';
        font-style: normal;
        font-weight: 900;
        font-size: 1.5em;
        src: url('https://fonts.googleapis.com/css2?family=Lobster&display=swap'); /* IE9 Compat Modes */
        src: local('Roboto'), local('Roboto'),

        p {
            width: 500px;
            display: block;
        }
        em {
            font-size: 0.5em;
            float: left;
            display: block;
            img {
                display: inline-block;
                margin-top: 5px;
                width: 15px;
                float: left;
            }
            .letterhead {
                display: inline-block;
                line-height: 260%;
                float: left;
                }
            }
        }
        .gray {
            color: #ccc;
        }
        a {
            color: #536379;
            opacity: 0.55;
            transition: all 0.6s;
            color: #536379;
            font-size: 1em;
        }
        a:hover {
            opacity: 1;
        }
        .fa-bars {
            display: none;
            color: #536379;
            font-size: 2rem;
        }
        nav {
            ul {
                display: flex;
                // flex-direction: row;
                justify-content: space-between;
                list-style: none;
                // padding: 0em 0em;
                            }
            li {
                margin: 15px 15px;
                justify-content: space-between;
                font-size: 1em;
                border: 2px solid green;
            }
            a {
            font-size: 1em;
            text-decoration: none;
            .active {
                color: tomato;
            }
        }
        a.active {
            color: #536379;
            }
        }

        @media only screen and (max-width: 800px) {
            padding: 0px;
            .logo {
                padding-left: 15px;
                padding-top: 0px !important;
            }
        }
        @media only screen and (max-width: 600px) {
            height: auto;
            min-height: 50px;
            display: block;
            position: relative;
            .logo {
                width: 100%;
                display: block;
                padding-top: 20px;
                margin: 0px;
                margin-left: -5px;
            a {
                padding: 20px 0px;
            }
        }
        .fa-bars {
            display: inline-block;
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
        }
        ul.collapsed {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-wrap: wrap;

            overflow: hidden;
            max-height: 0;
            -moz-transition-duration: 0.4s;
            -webkit-transition-duration: 0.4s;
            -o-transition-duration: 0.4s;
            transition-duration: 0.4s;
            -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
            -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
            -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
            transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

            &.is-expanded {
            overflow: hidden;
            max-height: 500px; /* approximate max height */
            -moz-transition-duration: 0.4s;
            -webkit-transition-duration: 0.4s;
            -o-transition-duration: 0.4s;
            transition-duration: 0.4s;
            -moz-transition-timing-function: ease-in;
            -webkit-transition-timing-function: ease-in;
            -o-transition-timing-function: ease-in;
            transition-timing-function: ease-in;
            }
            li {
                padding: 15px 10px;
                margin: 0px 0px;
                width: 100%;
            }
        }
    }
`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
// align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
    color:black;
}
&:hover {
    color: black;
}
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: transparent;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: 2.5px solid #E2EEF7;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #808080;
    }
`;