import React from "react";
import { NavLink } from "react-router-dom";
import './Goa.css';
import Footer from './Footer';

const Goa=() => {
    return(
        <div className="body-goa">
         <div className="home-image-goa">
           <div className="home-text-goa">
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
export default Goa;