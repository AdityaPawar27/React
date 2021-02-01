import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ReactGA from "react-ga";

import Nav from "../components/nav";
import Blog from "./blog";
import Article from "../components/article";

export default class Layout extends React.Component {
  constructor() {
    super();
    ReactGA.initialize("UA-111422776-1");
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    const main = () => (
      <div>
      <img href="https://envirya.in/wp-content/uploads/2019/11/Logo-Symbol.svg">
        <Aditya />
        <Pawar /
      </div>
    );
    return (
      <div>
        <BrowserRouter>
          <div id="center-stripe">
            <Nav />
            <Route exact path={process.env.PUBLIC_URL + "/"} component={main} />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/blog"}
              component={Blog}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/blog/:id"}
              component={Article}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
