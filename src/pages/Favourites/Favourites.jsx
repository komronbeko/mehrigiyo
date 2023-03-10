import React, { useContext, useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import phoneImg from "../../assets/animation_500_kznt7t90 1.png";
import messageImg from "../../assets/Group.png";
import { ContextMain } from "../../context/context";
import "./Favourites.scss";

const Favourites = () => {
  const { relatedToData } = useContext(ContextMain);
  const { favourites, setFavourites, carts, setCarts } = relatedToData;

  const [filteredFavourites, setFilteredFavourites] = useState(favourites);

  const deleteFavourite = (id) => {
    const unDeletedData = filteredFavourites.filter((item) => item.id !== id);
    setFilteredFavourites(unDeletedData);
    setFavourites(unDeletedData);
  };

  const addToCart = (chosen) => {
    if (!carts.includes(chosen)) {
      favourites.map((item) => {
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

  return (
    <div className="favourites py-20">
      <div className="container">
        <p>
          Bosh sahifa /{" "}
          <span className="text-[#53B175]">Saqlangan dorilar</span>
        </p>
        <h3 className="">Sevimli dorilar</h3>
        <div className="grid grid-cols-1 gap-4 w-full mb-24">
          {filteredFavourites.map((item) => (
            <div
              key={item.id}
              className="favourites__wrapper justify-between items-center py-5 px-20 border-2 border-gray-300 border-solid rounded-2xl"
            >
              <img
                src={item.image}
                alt="productImg"
                className="w-20 h-20 rounded-xl"
              />
              <h5>
                {item.name} <br /> <span>{item.type}</span>
              </h5>
              <AddBoxIcon
                color="success"
                fontSize="large"
                className="plusIcon"
                onClick={() => addToCart(item)}
              />
              <h4>
                <span>{item.previous}</span> <br />
                {item.price} uzs
              </h4>
              <DeleteOutlineOutlinedIcon
                className="text-red-600"
                onClick={() => deleteFavourite(item.id)}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-end">
          <img src={phoneImg} alt="phoneImg" /> <br />
          <img src={messageImg} alt="messageImg" className="-mr-5" />
        </div>
      </div>
    </div>
  );
};

export default Favourites;
