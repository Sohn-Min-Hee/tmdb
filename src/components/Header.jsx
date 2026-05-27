// import React from 'react';
import {Link} from 'react-router-dom'
import { BiSolidCameraMovie } from "react-icons/bi";
import './header.scss'

const Header = () => {
    return (
        <div className='header'>
            <h1 className='logo'><BiSolidCameraMovie /></h1>
            <div id='nav'>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="Drama">Drama</Link></li>
                        <li><Link to="Comedy">Comedy</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;