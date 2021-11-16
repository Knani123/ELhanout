import React, { useEffect } from "react";
import { Bar } from "./component";
import Categories from "./component/Categories";
import NewProduct from "./component/NewProduct";
import PubHome from "./component/PubHome";
import Slider from "./component/Slider/Slider";
import TopProducts from "./component/TopProducts";
import Libre from "./component/Libre";
import "./index.css";
import Footer from "./component/Footer";
import Tayara from "./component/Tayara";
import { Produits } from "./Data";

const Home = (props) => {
  console.log("props", props);

  return (
    <div>
      <Slider />
      <Categories />
      <PubHome image="http://corsicacom.cc/wp-content/uploads/2017/06/pub.jpg" />
      <TopProducts Produits={Produits} />
      <PubHome image="https://thumbs.dreamstime.com/z/pub-2552886.jpg" />
      <NewProduct
        color="rgba(212,215,112,0.5)"
        titre="Category 1"
        Produits={Produits}
      />
      <PubHome image="http://img.over-blog-kiwi.com/0/63/78/80/201307/ob_a62b66_publicite-commerce-spam-kotoyamagami-fotolia-com.jpg" />
      <NewProduct
        Produits={Produits}
        color="rgba(112,215,212,0.5)"
        titre="Category 2"
      />
      <PubHome image="http://img.over-blog-kiwi.com/0/63/78/80/201307/ob_a62b66_publicite-commerce-spam-kotoyamagami-fotolia-com.jpg" />
      <NewProduct
        Produits={Produits}
        color="rgba(215,85,154,0.7)"
        titre="Category 3"
      />
      <PubHome image="http://img.over-blog-kiwi.com/0/63/78/80/201307/ob_a62b66_publicite-commerce-spam-kotoyamagami-fotolia-com.jpg" />
      <NewProduct
        Produits={Produits}
        color="rgba(111,85,215,0.4)"
        titre="Category 4"
      />
      <PubHome image="http://img.over-blog-kiwi.com/0/63/78/80/201307/ob_a62b66_publicite-commerce-spam-kotoyamagami-fotolia-com.jpg" />
      <Libre color="rgba(45,85,215,0.7)" titre="Libre" Produits={Produits} />
      <Tayara />
      <PubHome image="http://img.over-blog-kiwi.com/0/63/78/80/201307/ob_a62b66_publicite-commerce-spam-kotoyamagami-fotolia-com.jpg" />
    </div>
  );
};

export default Home;
