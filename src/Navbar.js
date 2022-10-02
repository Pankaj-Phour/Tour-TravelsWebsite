import React, {useState} from 'react';
import './Navbar.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as FaIcons from'react-icons/fa';
import * as AiIcons from'react-icons/ai';
import{IconContext} from 'react-icons';
import { NavLink } from 'react-router-dom';

const Navbar= () => 
{
    const [sidebar,setSidebar]=useState(false);

    const showSidebar=()=>setSidebar(!sidebar);

    return(
        <div>
            <IconContext.Provider value={{color:'white'}}>
        <div className="navbar fixed-top">
            <NavLink to='#' className="logo"><strong>Traveler's Guide</strong></NavLink>
            <NavLink to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
            </NavLink>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
        <li className="nav-close">
            <NavLink exact='true' to='/' className="menu-bars"><AiIcons.AiOutlineClose /></NavLink>
            </li>
        <li className="nav-list">
            <NavLink exact='true' to='/' className="navitem">Home</NavLink>
            </li>
        <li className="nav-list">
            <NavLink to='Contact.js' className="navitem">Contact us</NavLink>
            </li>
        <li className="nav-list">
            <NavLink to='About.js' className="navitem">About us</NavLink>
            </li>
        <li className="nav-list">
            <NavLink to='Sports.js' className="navitem">Adventures</NavLink>
            </li>
            <li className="nav-list">
            <NavLink to='Booking.js' className="navitem">Travel Now</NavLink>
            </li>
            </ul>
    </nav>
    </IconContext.Provider>
    </div>
    )
   
};
export default Navbar;
