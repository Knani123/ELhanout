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
        <Route component={PageErr} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
