import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import catsReducer from "./features/cats/catsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
      cats: catsReducer,
    },
  });
  
ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>,
document.getElementById("root"));
