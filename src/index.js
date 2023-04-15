import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import catsReducer from "./features/cats/catsSlice";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import thunkMiddleware  from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
      cats: catsReducer,
    },
  });

// const composedEnhancer= composeWithDevTools(applyMiddleware(thunkMiddleware))
// const store= createStore(catsReducer, composedEnhancer)


ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>,
document.getElementById("root"));
