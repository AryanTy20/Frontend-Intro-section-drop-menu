import { useState, useEffect, useRef } from "react";

import "./app.scss";
import { Header, Main } from "./Components";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Main />
      </div>
    </>
  );
};

export default App;
