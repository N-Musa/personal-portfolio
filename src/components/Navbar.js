import React from 'react'
import {BrowserRouter as Router,} from "react-router-dom";
import { Route, Link } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    return(
        <>
        <nav>
            <div className="text-xl text-blue-600">Nuradin.Musa</div>
        </nav>
        </>
    )
}

export default Navbar
