import React from "react";

import png from "@assets/shop.png";

interface IAppProps {
  test?: string;
}
const App: React.FC<IAppProps> = () => {
  return (
    <div>
      <img src={png} alt="png" />
      <p>react app</p>
    </div>
  );
};
export default App;
