import React, { useContext, useState } from "react";
import { data } from "../../constants/source";
import { NavLink } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";

import "./Mahsulotlar.scss";
import { ContextMain } from "../../context/context";
import Details from "../../components/Details/Details";

const Mahsulotlar = () => {
  const { relatedToModal, relatedToData } = useContext(ContextMain);
  const { setDetails, details } = relatedToModal;
  const { setTafsilotlar, setFavourites, favourites, setCarts, carts } =
    relatedToData;

  const [searchingData, setSearchingData] = useState(data);

  const getInputValue = (value) => {
    const searchedData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.type.toLowerCase().includes(value.toLowerCase())
    );
    setSearchingData(searchedData);
  };

  const addToFavour = (chosen) => {
    if (!favourites.includes(chosen)) {
      searchingData.map((item) => {
        if (item.id === chosen.id) {
          return setFavourites([...favourites, item]);
        } else {
          return favourites;
        }
      });
    } else {
      alert("This product has been already chosen");
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

  const tafsilotlarData = (id) => {
    setDetails(true);
    const filtered = data.filter((item) => item.id === id);
    setTafsilotlar(filtered);
  };

  return (
    <div className="productsPage">
      <div className="container">
        <div className="productsPage__navigate">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `${isActive ? "productsPage__navActive" : ""}`
            }
          >
            Bosh Sahifa
          </NavLink>{" "}
          /
          <NavLink
            to={"/mahsulotlar"}
            className={({ isActive }) =>
              `${isActive ? "productsPage__navActive" : ""}`
            }
          >
            Mahsulotlar
          </NavLink>
        </div>
        <div className="productsPage__head">
          <h3>Mahsulotlar</h3>
          <div className="productsPage__head__search">
            <button>
              <SearchOutlinedIcon fontSize="small" />
            </button>
            <input
              type="text"
              placeholder="Qidirish"
              onInput={(e) => getInputValue(e.target.value)}
            />
          </div>
        </div>
        <div className="productsPage__body">
          <div className="productsPage__categories">
            <div>
              <h5>Kategoriyalar</h5>
              <p>
                <RefreshOutlinedIcon fontSize="small" /> Tozalash
              </p>
            </div>
            <ul>
              <li>
                <label>
                  <input type="checkbox" />
                  Hammasi
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Choy
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Asal
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Yog'
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Non
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Ziravorlar
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Sharbatlar
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Lolipoplar
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Lolipoplar
                </label>
              </li>
            </ul>
            <div>
              <p>
                <ExpandMoreOutlinedIcon fontSize="small" /> Ko'proq
              </p>
            </div>
          </div>
          {details ? (
            <div className="header__openKirish">
              <Details />
            </div>
          ) : null}
          <div className="productsPage__products">
            {
              <div className="grid grid-cols-3 gap-8">
                {searchingData.map((item) => {
                  return (
                    <div
                      className="swippers__royxat border-2 border-gray-300 border-solid rounded-xl"
                      key={item.id}
                    >
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
                        <button onClick={() => tafsilotlarData(item.id)}>
                          Tafsilotlar <ChevronRightSharpIcon fontSize="small" />
                        </button>
                      </div>
                    </div>
                  );
                })}
                {searchingData.map((item) => {
                  return (
                    <div
                      className="swippers__royxat border-2 border-gray-300 border-solid rounded-xl"
                      key={item.id}
                    >
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
                        <button onClick={() => tafsilotlarData(item.id)}>
                          Tafsilotlar <ChevronRightSharpIcon fontSize="small" />
                        </button>
                      </div>
                    </div>
                  );
                })}
                {searchingData.map((item) => {
                  return (
                    <div
                      className="swippers__royxat border-2 border-gray-300 border-solid rounded-xl"
                      key={item.id}
                    >
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
                        <button onClick={() => tafsilotlarData(item.id)}>
                          Tafsilotlar <ChevronRightSharpIcon fontSize="small" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mahsulotlar;
