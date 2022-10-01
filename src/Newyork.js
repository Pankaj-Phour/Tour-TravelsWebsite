import React from "react";
import { NavLink } from "react-router-dom";
import './Newyork.css';
import Footer from './Footer';

const Newyork=() => {
    return(
        <div className="body-newyork">
         <div className="home-image-newyork">
           <div className="home-text-newyork">
             <h3>Welcome to our Website</h3>
              <p>We give you the opportunity t explore  the beauty of nature</p>
               <NavLink to="/Contact.js" className="btn btn-outline-success">Travel Now</NavLink>      
            </div>
         </div>
         <br/>
        < Footer/>
        </div>
    );
}
export default Newyork;