import React from "react";
import "./Topcompanies.css";

function Topcompanies() {
  return (
    <div className="topcompanieswrapper">
      <div className="headingtopcompanies">
        <h1 id="h">
          Top Companies Hiring <span id="data">Data</span>{" "}
          <span id="scientist">Scientist</span>
        </h1>
      </div>
      <div className="cardsDiv">
        <div className="card1a">
          <span>Logo</span>
        </div>
        <div className="card1a">
          <span>Logo</span>
        </div>
        <div className="card1aa">
          <span>Logo</span>
        </div>
        <div className="card1aa">
          <span>Logo</span>
        </div>
        <div className="card1aa">
          <span>Logo</span>
        </div>
      </div>
    </div>
  );
}

export default Topcompanies;
