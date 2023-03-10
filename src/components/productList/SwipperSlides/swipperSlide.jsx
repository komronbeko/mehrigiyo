import React, { useContext } from "react";
import { data } from "../../../constants/source";

import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { ContextMain } from "../../../context/context";

const SwSlide = () => {
  const { relatedToModal, relatedToData } = useContext(ContextMain);
  const { setDetails, setPrice } = relatedToModal;
  const { setTafsilotlar, setFavourites, favourites, setCarts, carts } =
    relatedToData;

  const addToFavour = (chosen) => {
    if (!favourites.includes(chosen)) {
      data.map((item) => {
        if (item.id === chosen.id) {
          return setFavourites([...favourites, item]);
        } else {
          return favourites;
        }
      });
    } else {
      return alert("This product has been already choosen");
    }
  };
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
  };

  const tafsilotlarData = (el) => {
    setDetails(true);
    setPrice(el.price);
    const filtered = data.filter((item) => item.id === el.id);
    setTafsilotlar(filtered);
  };

  return (
    <div className="flex gap-8 my-10">
      {data.map((item) => {
        return (
          <div className="swippers__royxat" key={item.id}>
            <div className="swippers__images">
              <img src={item.image} alt={item.name} />
              <FavoriteBorderOutlinedIcon
                className="heartStyle"
                onClick={() => addToFavour(item)}
              />
            </div>
            <div className="swippers__royxat__body">
              <strong>{item.name}</strong>
              <p>{item.type}</p>
              <div className="swippers__price">
                <h4>
                  <span>{item.previous}</span>
                  <br />
                  {item.price}
                </h4>
                <AddBoxIcon
                  color="success"
                  fontSize="large"
                  className="plusIcon"
                  onClick={() => addToCart(item)}
                />
              </div>
              <button onClick={() => tafsilotlarData(item)}>
                Tafsilotlar <ChevronRightSharpIcon fontSize="small" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SwSlide;
