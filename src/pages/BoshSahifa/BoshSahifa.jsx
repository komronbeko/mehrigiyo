import React from "react";
import Contact from "../../components/contact/Contact";
import Farming from "../../components/farming/Farming";
import Intro from "../../components/introduction/intro";
import ProductList from "../../components/productList/ProductList";
import Questions from "../../components/questions/Questions";
import Sponsors from "../../components/sponsors/Sponsors";

const BoshSahifa = () => {
  return (
    <div className="mainPage">
      <Intro />
      <ProductList/>
      <Farming/>
      <Questions/>
      <Contact/>
      <Sponsors/>
    </div>
  );
};

export default BoshSahifa;
