import React from "react";
import { NavLink } from "react-router-dom";
import './Italy.css';
import Footer from './Footer';

const Italy=() => {
    return(
        <div className="body-italy">
         <div className="home-image-italy">
           <div className="home-text-italy">
             <h3>Welcome to our Website</h3>
              <p>We give you the opportunity t explore  the beauty of nature</p>
               <NavLink to="/Contact.js" className="btn btn-outline-success">Travel Now</NavLink>      
            </div>
         </div>
         <br/>
          < Footer />
        </div>
    );
}
export default Italy;