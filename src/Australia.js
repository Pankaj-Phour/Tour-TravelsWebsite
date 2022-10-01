import React from "react";
import { NavLink } from "react-router-dom";
import './Australia.css';
import Footer from './Footer';

const Australia=() => {
    return(
        <div className="body-australia">
         <div className="home-image-australia">
           <div className="home-text-australia">
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
export default Australia;