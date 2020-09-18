import React from 'react';
import { NavLink } from 'react-router-dom';

// Scss files
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__navItemsWrapperDiv'>
                <NavLink to='/' className='navbarLogo'>
                    genisis <br />
                    vision
                </NavLink>
                <ul className='navbar__navItemsWrapperDiv__navItemsContainer'>
                    <NavLink
                        to='/about'
                        className='navbar__navItemsWrapperDiv__navItemsContainer__navItem'
                    >
                        about us
                    </NavLink>
                    <NavLink
                        to='/mission'
                        className='navbar__navItemsWrapperDiv__navItemsContainer__navItem'
                    >
                        mission
                    </NavLink>
                    <NavLink
                        to='/vision'
                        className='navbar__navItemsWrapperDiv__navItemsContainer__navItem'
                    >
                        vision
                    </NavLink>
                    <NavLink
                        to='/objectives'
                        className='navbar__navItemsWrapperDiv__navItemsContainer__navItem'
                    >
                        objectives
                    </NavLink>
                </ul>
                <div className='cta'>get started</div>
            </div>
        </div>
    );
};

export default Navbar;
