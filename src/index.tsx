import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ListContextProvider } from "./components/ListContext/ListContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ListContextProvider>
      <App />
    </ListContextProvider>
  </BrowserRouter>
);
