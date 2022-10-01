import React from "react";
import { NavLink } from "react-router-dom";
import './Norway.css';
import Footer from './Footer';

const Norway=() => {
    return(
        <div className="body-norway">
         <div className="home-image-norway">
           <div className="home-text-norway">
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
export default Norway;