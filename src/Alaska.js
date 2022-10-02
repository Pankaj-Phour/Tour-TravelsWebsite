import React from "react";
import { NavLink } from "react-router-dom";
import './Alaska.css';
import Footer from './Footer';

const Alaska=() => {
    return(
        <div className="body-alaska">
         <div className="home-image-alaska">
           <div className="home-text-alaska">
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
export default Alaska;