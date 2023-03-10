import React, { useCallback, useContext, useState } from "react";
import { data } from "../../constants/source";
import stars from "../../assets/stars.png";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { ContextMain } from "../../context/context";
import "./details.scss";
import Increment from "../../utils/increment/Increment";
import Decrement from "../../utils/decrement/Decrement";

const Details = () => {
  const [expanded, setExpanded] = React.useState(false);
  const { relatedToModal, relatedToData } = useContext(ContextMain);
  const { setDetails, setCount, count, setPrice, price } = relatedToModal;
  const { tafsilotlar, setCarts, carts } = relatedToData;

  const addToCart = (chosen) => {
    if (!carts.includes(chosen)) {
      data.map((item) => {
        if (item.id === chosen.id) {
          return setCarts([...carts, item]);
        } else {
          return carts;
        }
      });
    } else {
      return alert("This product has been already choosen");
    }
    setDetails(false)
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
    setPrice(prev => prev + price)
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => {
      if (prev >= 1) {
        setPrice(prev => prev - price)
        return prev - 1;        
      } else {
        return prev;
      }
    });
  }, []);

  return (
    <>
      {tafsilotlar.map((item) => (
        <div className="details relative" key={item.id}>
          <div className="kirish__closeIcon" onClick={() => setDetails(false)}>
            <CloseIcon />
          </div>
          <div className="details__left">
            <img src={item.image} alt="" />
          </div>
          <div className="details__right">
            <div className="details__right--1">
              <h3>{item.name}</h3>
              <img src={stars} alt="stars" />
            </div>
            <div className="details__right--2">
              <div>
                <Increment setCount={increment} />
                <span>{count}</span> <Decrement setCount={decrement} />
              </div>
              <h4>
                {price} <span>uzs</span>
              </h4>
            </div>
            <div className="details__right--3">
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: "24px",
                    }}
                  >
                    Mahsulot haqida
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.description}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="details__right--4">
              <h4>Og'irligi</h4>
              <p>100gr</p>
            </div>
          </div>
          <button
            className="absolute bottom-10 text-white right-20 bg-green-600 px-8 py-3 rounded-full"
            onClick={() => addToCart(item)}
          >
            Savatga qo'shish
          </button>
        </div>
      ))}
    </>
  );
};

export default Details;
