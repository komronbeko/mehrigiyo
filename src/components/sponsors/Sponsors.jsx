import React from "react";
import sponsor1 from "../../assets/sponsor1.png";
import sponsor2 from "../../assets/sponsor2.png";
import sponsor3 from "../../assets/sponsor3.png";
import sponsor4 from "../../assets/sponsor4.png";
import sponsor5 from "../../assets/sponsor5.png";
import sponsor6 from "../../assets/sponsor6.svg";

const Sponsors = () => {
  return (
    <>
      <hr className="hr container" />
      <div className="centerUl flex justify-center items-center mb-20">
        <ul className="flex flex-row justify-center items-center gap-20">
          <li className="flex flex-row gap-4">
            <img src={sponsor1} alt="img" />
          </li>
          <li className="flex flex-row gap-4">
            <img src={sponsor2} alt="img" />
          </li>
          <li className="flex flex-row gap-4">
            <img src={sponsor3} alt="img" />
          </li>
          <li className="flex flex-row gap-4">
            <img src={sponsor4} alt="img" />
          </li>
          <li className="flex flex-row gap-4">
            <img src={sponsor5} alt="img" />
          </li>
          <li className="flex flex-row gap-4">
            <img src={sponsor6} alt="img" />
          </li>
        </ul>
      </div>
      <hr className="hr container mb-40" />
    </>
  );
};

export default Sponsors;
