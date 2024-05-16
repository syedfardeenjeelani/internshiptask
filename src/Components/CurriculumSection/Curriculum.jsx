import React from "react";
import "./Curriculum.css";

function Curriculum() {
  const data = [
    {
      name: "C++",
      desciption: "Learn C++ for strong programming fundamentals.",
      img: "https://i.ibb.co/F8KQZNB/eye.png",
      Curriculum: "View Curriculum",
    },
    {
      name: "MERN Stack",
      desciption: "Master the MERN stack for high-demand projects.",
      img: "https://i.ibb.co/F8KQZNB/eye.png",
      Curriculum: "View Curriculum",
    },
    {
      name: "Data Structure & Algorithm",
      desciption:
        "Excel in Data Structures and Algorithms for interview success.",
      img: "https://i.ibb.co/F8KQZNB/eye.png",
      Curriculum: "View Curriculum",
    },
    {
      name: "Competitive Programming",
      desciption:
        "Excel in Data Structures and Algorithms for interview success.",
      img: "https://i.ibb.co/F8KQZNB/eye.png",
      Curriculum: "View Curriculum",
    },
  ];

  return (
    <div className="curriculumWrapper">
      <div className="headingDiv">
        <div className="divlineone">
          <span>DATASCIENCE COURSE LEARNING PATH</span>
        </div>{" "}
        <div className="divline2">
          <h1 className="h1">
            <span className="h1Span">Data</span>{" "}
            <span className="h1span2">Science</span>
          </h1>{" "}
          <span className="darker">Course Curriculum</span>
        </div>
      </div>
      <div className="dataDiv">
        {data.map((e, i) => (
          <div key={i} className="spacingdiv">
            <div className="colDiv">
              <div id="cpp">{e.name}</div>
              <div id="lineline">{e.desciption}</div>
            </div>
            <div className="imgdiv">
              <img src={e.img} alt="" /> <span>{e.Curriculum}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Curriculum;
