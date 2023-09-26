import React from 'react'
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <div>
            <div className='nav_css'>
                <NavLink to="/" className='link_css'>Home</NavLink>
                <NavLink to="/contact" className='link_css'> Contact</NavLink>
                <NavLink to="about" className='link_css'> About</NavLink>
            </div>
        </div>
    )
}

export default Menu;
