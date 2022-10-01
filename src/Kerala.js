import React from "react";
import { NavLink } from "react-router-dom";
import './Kerala.css';
import Footer from './Footer';

const Kerala=() => {
    return(
        <div className="body-kerala">
         <div className="home-image-kerala">
           <div className="home-text-kerala">
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
export default Kerala;