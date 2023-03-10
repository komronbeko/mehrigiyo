import React from "react";
import farming from "../../assets/Rectangle 366.png";
import home from "../../assets/home-1-blog-bg 1.png";
import "./farming.scss";

const Farming = () => {
  return (
    <div className="farming container">
      <div>
        <h4>Biz shifobaxsh o‘tlarimiz o‘sishiga g‘amxo‘rlik qilamiz</h4>
        <img src={farming} alt="farming" />
      </div>
      <img className="farming__img" src={home} alt="home" />
    </div>
  );
};

export default Farming;
