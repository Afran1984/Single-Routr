import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2 className='text-3xl'>Nave Bar</h2>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/photos">Photos</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;