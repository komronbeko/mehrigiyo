import React from "react";
import Logos from "./Logos/Logos";
import "./productList.scss";
import Ruyxat from "./ro'yxat/Ruyxat";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { NavLink } from "react-router-dom";

const ProductList = () => {
  return (
    <div className="productList container relative">
      <Logos />
      <h3>
        Mahsulotlarimiz <br /> ro'yxati
      </h3>
      <Ruyxat />
      <NavLink to={"/mahsulotlar"}>
        <button className="productList__allBtn mt-10">
          Barcha mahsulotlarini ko'rish <ArrowRightAltOutlinedIcon />{" "}
        </button>
      </NavLink>
    </div>
  );
};

export default ProductList;
