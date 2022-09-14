import { useState, useEffect, useRef } from "react";

import "./app.scss";
import { Header, Main } from "./Components";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Main />

        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/AryanTy20">Aryan Tirkey</a>.
        </div>
      </div>
    </>
  );
};

export default App;
