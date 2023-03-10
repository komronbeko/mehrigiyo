import React from "react";
import ControlledAccordions from "../accordion/accordion";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

import "./questions.scss";

const Questions = () => {
  return (
    <div className="questions">
      <div className="container">
        <div className="questions__heading">
          <h2>Ko’p so'raladigan savollar</h2>
          <p>
            Qo'shimcha ma'lumot uchun <br />
            biz bilan bog'laning
          </p>
        </div>
        <div className="questions__body">
          <div className="questions__left">
            <button>
              Batafsil{" "}
              <ArrowRightAltOutlinedIcon className="questions__left__arrow" />
            </button>
          </div>
          <div className="questions__right">
            <ControlledAccordions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
