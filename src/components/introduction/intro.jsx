import React from "react";
import "./intro.scss";
import card1 from "../../assets/Group 2535070.png";
import card2 from "../../assets/Group 2534947.png";
import card3 from "../../assets/Group 2534969.png";
import phoneImage from "../../assets/animation_500_kznt7t90 1.png";
import messageImage from "../../assets/Group.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="intro__heading">
          <h2>Bepul shifokor maslahat kerakmi?</h2>
          <p>
            24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq Faqat
            <span>mobil ilovada</span>
          </p>
        </div>
        <div className="intro__images">
          <img src={card1} alt="card1" />
          <img src={card2} alt="card2" />
          <img src={card3} alt="card3" />
          <div className="intro__contact">
            <img src={phoneImage} alt="phoneImage" />
            <img src={messageImage} alt="messageImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
