import React, { createContext, useState } from "react";

export const ContextMain = createContext({});

const ContextProvider = ({ children }) => {
  const [kirish, setKirish] = useState(false);
  const [login, setLogin] = useState(true);
  const [reg, setReg] = useState(false);
  const [details, setDetails] = useState(false);
  const [tafsilotlar, setTafsilotlar] = useState([]);
  const [count, setCount] = useState(1);
  const [favourites, setFavourites] = useState([]);
  const [carts, setCarts] = useState([]);
  const [favoursImg, setFavoursImg] = useState(false);
  const [price, setPrice] = useState();


  const relatedToModal = {
    setKirish,
    kirish,
    setLogin,
    login,
    setReg,
    reg,
    setDetails,
    details,
    setCount,
    count,
    setFavoursImg,
    favoursImg,
    setPrice,
    price
  };

  const relatedToData = {
    setTafsilotlar,
    tafsilotlar,
    setFavourites,
    favourites,
    setCarts,
    carts
  };

  return (
    <ContextMain.Provider value={{ relatedToModal, relatedToData }}>
      {children}
    </ContextMain.Provider>
  );
};

export default ContextProvider;
