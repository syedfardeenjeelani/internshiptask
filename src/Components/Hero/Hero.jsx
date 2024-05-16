import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FcGraduationCap } from "react-icons/fc";
import { LiaAwardSolid } from "react-icons/lia";
import { PiPaperPlaneTiltLight } from "react-icons/pi";
import "./Hero.css";

function Hero() {
  const data = [
    {
      name: "Personal Mentorship",
    },
    {
      name: "Internship Assitance",
    },
    {
      name: "Industry Certified Courses",
    },
  ];

  const data2 = [
    {
      name: "Courses",
      img: "https://i.ibb.co/xJyPpPy/grad.png",
      number: 24,
    },
    {
      name: " Learners",
      img: "https://i.ibb.co/GFS0xNJ/graduation.png",
      number: "30k+",
    },
    {
      name: " Doubts Solved",
      img: "https://i.ibb.co/d0vqH0m/cloud.png",
      number: "100k",
    },
    {
      name: " Student Projects",
      img: "https://i.ibb.co/TRs39Rq/tick.png",
      number: "10k",
    },
  ];

  return (
    <>
      <div className="heroWrapper">
        <div className="innerDivWrapper">
          {" "}
          <div className="infoDiv">
            <div className="lineOne">
              <FcGraduationCap />
              <h2>
                An <span>IIT Delhi</span> Alumni Initiative
              </h2>
            </div>
            <div className="science">
              <span className="bigText">
                Become an Expert in the field of{" "}
                <span> Data Science with 6 courses</span>
              </span>
              <span className="oneLine">
                A specially crafted Tech Kickstarter, with{" "}
                <span>5+ extensive online courses.</span>
              </span>
            </div>
            <div className="servicesDiv">
              {data.map((e, i) => (
                <div key={i} className="services">
                  <span>
                    <LiaAwardSolid size={20} color="#BB5302" />
                  </span>
                  <span>{e.name}</span>
                </div>
              ))}
            </div>
            <div className="buttonsDiv">
              {" "}
              <button className="enroll">
                Enroll Now <PiPaperPlaneTiltLight />
              </button>
              <button className="knowMore">
                Know More <FaRegQuestionCircle />
              </button>
            </div>
          </div>
        </div>

        <div className="afterInfoDiv">
          {data2.map((e, i) => (
            <div className="miniCard">
              <img src={e.img} alt="" />
              <div className="innedCardDetails">
                <div className="number">{e.number}</div>
                <div className="courses">{e.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
