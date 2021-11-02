import React from "react";
import { Router, BrowserRouter, Route } from "react-router-dom";

import png from "@assets/shop.png";
import "@utils/index";

interface IAppProps {
  test?: string;
}
const App: React.FC<IAppProps> = () => {
  return (
    <div>
      <img src={png} alt="png" />
      <p>react app1</p>
    </div>
  );
};
export default App;
