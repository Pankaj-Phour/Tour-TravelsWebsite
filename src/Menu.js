import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu=() =>
{
    return(
        <div className="body-menu">
            This is Menu page
            <br/>
            <marquee>You can send your complaints or suggestions on our official email id: <NavLink to="/Contact.js" className="help">pankaj.phour70@gmail.com</NavLink>. Or you can call us at :- <NavLink to="/Contact.js" className="help"><strong>9518455298</strong></NavLink></marquee>
            <footer>
    <div className="row">
        <ul className="col">
            <li>
                <NavLink to="/" exact className="footer-1">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Contact.js" className="footer-1">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/About.js" className="footer-1">About</NavLink>
            </li>
            <li>
                <NavLink to="/Menu.js" className="footer-1">Menu</NavLink>
            </li>
        </ul>
        <div className="col list-2">
            <h2 className="brand">Traveler's Guide</h2>
            <ul>
                <li>
                    <NavLink to="/Videos.js" className="footer-2">Blogs</NavLink>
                </li>
                <li>
                    <NavLink to="/Videos.js" className="footer-2">Videos</NavLink>
                </li>
                <li>
                    <NavLink to="/Sports.js"  className="footer-2">Sports</NavLink>
                </li>
                </ul>
                </div>
                <div className="col list-3">
                  <div className="brand-2">  Places to Visit </div>
                <ul>
                    <li>
                        <NavLink to="/India.js" className="footer-3">
                            In India
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/International.js" className="footer-3">
                            International
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Island.js" className="footer-3">
                            Islands
                        </NavLink>
                    </li>
                </ul>
                </div>
    </div>
</footer>
        </div>
    )
};
export default Menu;
