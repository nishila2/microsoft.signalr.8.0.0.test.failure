import React from "react";
import * as ReactDOM from "react-dom";
import { Home } from "./Home";
import { Footer } from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
