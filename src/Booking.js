import React from "react";
import { NavLink } from "react-router-dom";
import './Booking.css';
import Footer from './Footer';

const Booking=() => {
    return(
        <div classNameName="body-booking">
         <div classNameName="home-image-booking">
           <div classNameName="home-text-booking">
             <h3>Welcome to our Website</h3>
              <p>We give you the opportunity t explore  the beauty of nature</p>
               <NavLink to="/Contact.js" classNameName="btn btn-outline-success">Travel Now</NavLink>      
            </div>
         </div>
         <br/>
         <div classNameName="form">
             <form classNameName="needs-validation" noValidate>
            <div classNameName="form-group">
                <label for="name" classNameName="text">Name : </label>
                <input type="text" classNameName="form-control mr-sm-2 outline" placeholder="Enter your Name" required/>
                <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
           </div>
            <div classNameName="form-group">
                <label for="email" classNameName="text">Email : </label>
                <input type="email" classNameName="form-control mr-sm-2 outline" placeholder="Enter your Email-id" required/>
                <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <div classNameName="form-group">
                <label for="Tourist" classNameName="text">No. of Travellers : </label>
                <input type="number" classNameName="form-control mr-sm-2 outline" placeholder="Total Travellers" required/>
                <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <div classNameName="form-group">
                <label for="contact" classNameName="text">Contact no. </label>
                <input type="text" classNameName="form-control mr-sm-2 outline" placeholder="Enter your Contact number" required/>
                <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <div classNameName="form-group">
                <label for="Place" classNameName="text">Place to Visit : </label>
                <input type="text" classNameName="form-control mr-sm-2 outline" placeholder="Enter the Place You Want To Visit" required/>
                <button classNameName="btn btn-outline-secondary submit" type="submit">Submit</button>
                <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            </form>
            </div>
           < Footer/>
<script>
    (function () {
window.addEventListener('load',function(){
// var forms = document.getElementsByclassNameName('needs-validation');
// var validation = Array.prototype.filter.call(forms,function(form){
//     form.addEventListener('submit',function(event){
//         if (form.checkValidity() === false){
//             event.preventDefault();
//             event.stopPropagation();
//         }
//         form.classNameList.add('was-validated');
//         },false);
//     });
},false)
})();
</script>
        </div>
    );
}
export default Booking;