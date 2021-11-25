import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageErr from "./PageErr";
import Product from "./Product";
import OneProduct from "./OneProduct";
import Bar from "./component/Bar";
import "./index.css";
import Footer from "./component/Footer";
import Login from "./Login";
import Favorites from "./Favorites";
import PageConf from "./PageConf";
import SignUp from "./SignUp";
import Pswforget from "./Pswforget";
import AddProduct from "./AddProduct";
import Profil from "./Profil";

const App = () => {
  return (
    <Router>
      <Bar />
      <div className="sous-bar"></div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/Product/:id" component={OneProduct} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Favorites" component={Favorites} />
        <Route exact path="/PageConf" component={PageConf} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Pswforget" component={Pswforget} />
        <Route exact path="/AddProduct" component={AddProduct} />
        <Route exact path="/Profil" component={Profil} />
        <Route component={PageErr} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
