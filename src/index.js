import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import catsReducer from "./features/cats/catsSlice";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunkMiddleware  from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(catsReducer, composedEnhancer);


ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>,
document.getElementById("root"));
