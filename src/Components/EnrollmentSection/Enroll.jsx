import React from "react";
import "./Enroll.css";

function Enroll() {
  return (
    <div className="enrollwrapper">
      <div className="holdingall">
        <div className="leftsidetext">
          <h1 id="hh">Enroll for DataScience Bundle @₹1,499</h1>
          <span id="hhh">
            Become an Expert in the data science field by enrolling into 6
            Extensive courses!
          </span>
          <button>ENroll now</button>
        </div>
        <div>
          {" "}
          <h1>
            total number of courses <br />6
          </h1>
          <h1>
            Total number of Certificates <br />6
          </h1>
          <h1>
            Access to Courses <br />
            LIFETIME
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Enroll;
