import React from "react";
import "./Navbar.css";

function Navbar() {
  return (     
    // the wrapper div
    <div className="wrapper">  
    {/* wrapper first div */}
      <div className="wrapperLineOne">
        <div className="navDivOne">
          <span>LOGO</span>
        </div>
        <div className="navDivTwo">
          <span className="navLogin">Login</span>
          <button className="navButton">Sign up</button>
        </div>
      </div>
       {/* nav  wrapper 2nd line starts here */}
      <div className="wrapperLineTwo">
        <div className="rectanglecontainer"> 
          <span className="wrapperLineTwoSpan">Overview</span>
          <span className="rectangle"></span>
        </div>
        <span  >Curriculum</span>
        <span >Refund</span>
        <span >Testimonials</span>
      </div>
    </div>
  );
}

export default Navbar;
