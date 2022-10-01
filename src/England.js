import React from "react";
import { NavLink } from "react-router-dom";
import './England.css';
import Footer from './Footer';

const England=() => {
    return(
        <div className="body-england">
         <div className="home-image-england">
           <div className="home-text-england">
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
export default England;