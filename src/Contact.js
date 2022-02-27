import React from 'react';
import './Contact.css';
import { NavLink } from 'react-router-dom';

const Contact=() =>
{
    return(
        <div className="contact-us">
        <div className="form body-contact">
            <form className="form-group">
                <label for="name" className="text">Name : </label>
                <input type="text" className="form-control mr-sm-2 outline" placeholder="Enter your Name"/>
            </form>
            <form className="form-group">
                <label for="email" className="text">Email : </label>
                <input type="email" className="form-control mr-sm-2 outline" placeholder="Enter your Email-id"/>
            </form>
            <form className="form-group">
                <label for="contact" className="text">Contact no. : </label>
                <input type="text" className="form-control mr-sm-2 outline" placeholder="Enter your Contact number"/>
                <button className="btn btn-outline-secondary submit" type="submit">Submit</button>
            </form>
            </div>
            <p className="contact">
                You can send your suggestions and complaints on :- <a href="#">pankaj.phour70@gmail.com</a>
                </p>
                <p className="contact1">
                    Or you can also contact us at :- <strong>9518455298</strong>
                    </p>
                    <br/>
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
export default Contact;
