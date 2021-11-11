import React from "react";
import { Router, BrowserRouter, Route } from "react-router-dom";

import Home from "@pages/Home";
import About from "@pages/About";
import State from "@pages/State";

import png from "@assets/shop.png";
import "@utils/index";

interface IAppProps {
  test?: string;
}
const App: React.FC<IAppProps> = () => {
  return (
    <BrowserRouter>
      <img src={png} alt="png" />
      <p>react app</p>
      <Route path={`/home`} component={Home}></Route>
      <Route path={`/about`} component={About}></Route>
      <Route path={`/state`} component={State}></Route>
    </BrowserRouter>
  );
};
export default App;
