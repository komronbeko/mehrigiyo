import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ContextMain } from "../../../context/context";
import Kirish from "../../Kirish/Kirish";
import { LocalizationApi } from "../../../context/localizationContext";


const Header = () => {
  const { relatedToModal } = useContext(ContextMain);
  const { setKirish, kirish } = relatedToModal;
  const { setLanguage, language } = useContext(LocalizationApi);
  const [color, setColor] = useState({
    headerMenu: "#E5FCED",
    headerLinks: "#b6e1c6",
  });

  function changeLanguage(e) {
    setLanguage(e.target.value);
  }

  return (
    <div className="header">
      <div
        className="header__menu"
        style={{ backgroundColor: `${color.headerMenu}` }}
      >
        <div className="container header__menu__container">
          <nav>
            {language === "uz" ? (
              <ul className="header__menu__list">
                <li>
                  <p>Mahsulotlar katalogi</p>
                </li>
                <li>
                  <p>Foto-lavhalar</p>
                </li>
                <li>
                  <p>Yetkazib berish va to'lash</p>
                </li>
                <li>
                  <p>Aksiya</p>
                </li>
                <li>
                  <p>Yangi</p>
                </li>
              </ul>
            ) : language === "ru" ? (
              <ul className="header__menu__list">
                <li>
                  <p>Каталог товаров</p>
                </li>
                <li>
                  <p>Фотографии</p>
                </li>
                <li>
                  <p>Доставка и оплата</p>
                </li>
                <li>
                  <p>Aкция</p>
                </li>
                <li>
                  <p>Hовый</p>
                </li>
              </ul>
            ) : (
              <ul className="header__menu__list">
                <li>
                  <p>Product catalog</p>
                </li>
                <li>
                  <p>Photographs</p>
                </li>
                <li>
                  <p>Delivery and payment</p>
                </li>
                <li>
                  <p>Sale</p>
                </li>
                <li>
                  <p>New</p>
                </li>
              </ul>
            )}
          </nav>
          <div className="header__right">
            <ul className="header__right__list">
              <li>
                <select onClick={changeLanguage}>
                  <option value="uz">uz</option>
                  <option value="ru">ru</option>
                  <option value="en">en</option>
                </select>
              </li>
              <li>
                <p>
                  Toshkent shahar{" "}
                  <LocationOnIcon className="header__locationIcon" />
                </p>
              </li>
              <li>
                <p className="header__kirish" onClick={() => setKirish(true)}>
                  Kirish <PersonIcon className="header__personIcon" />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="header__link pt-24"
        style={{ backgroundColor: `${color.headerLinks}` }}
      >
        <div className="container header__link__container">
          <h3>Logo</h3>
          <nav className="header__link__nav">
            <ul className="header__link__list">
              <NavLink
                className={({ isActive }) => `${isActive ? "navActive" : ""}`}
                to={"/"}
                onClick={() =>
                  setColor({ headerMenu: "#E5FCED", headerLinks: "#b6e1c6" })
                }
              >
                <li>
                  <p>Bosh sahifa</p>
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) => `${isActive ? "navActive" : ""}`}
                to={"/mahsulotlar"}
                onClick={() =>
                  setColor({ headerMenu: "white", headerLinks: "#E5E5E5" })
                }
              >
                <li>
                  <p>Mahsulotlar</p>
                </li>
              </NavLink>
            </ul>
            <div className="header__icons">
              <NavLink to={"/favourites"} className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}>
                <FavoriteBorderIcon className="header__icons__child heartStyle" />
              </NavLink>
              <NavLink to={"/cart"} className={({ isActive }) => `${isActive ? "text-green-500" : ""}`}>
                <AddShoppingCartIcon className="header__icons__child cartStyle" />
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
      {kirish ? (
        <div className="header__openKirish">
          <Kirish />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
