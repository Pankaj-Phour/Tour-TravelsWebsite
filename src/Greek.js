import React from "react";
import { NavLink } from "react-router-dom";
import './Greek.css';
import Footer from './Footer';

const Greek=() => {
    return(
        <div className="body-greek">
         <div className="home-image-greek">
           <div className="home-text-greek">
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
export default Greek;