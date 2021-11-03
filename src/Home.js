import React, { useEffect } from "react";
import { Bar } from "./component";
import Categories from "./component/Categories";
import NewProduct from "./component/NewProduct";
import PubHome from "./component/PubHome";
import Slider from "./component/Slider/Slider";
import TopProducts from "./component/TopProducts";
import "./index.css";
const Home = () => {
  useEffect(() => {
    alert("hello");
  }, []);
  return (
    <div>
      <Bar />
      <div className="sous-bar"></div>
      <Slider />
      <Categories />
      <PubHome image="http://corsicacom.cc/wp-content/uploads/2017/06/pub.jpg" />
      <TopProducts />
      <PubHome image="https://thumbs.dreamstime.com/z/pub-2552886.jpg" />
      <NewProduct color="rgba(212,215,112,0.5)" />
      <PubHome image="http://img.over-blog-kiwi.com/0/63/78/80/201307/ob_a62b66_publicite-commerce-spam-kotoyamagami-fotolia-com.jpg" />
      <NewProduct color="rgba(112,215,212,0.5)" />
    </div>
  );
};

export default Home;
