import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, applyMiddleware} from "redux";
import {rootReducer} from './components/reducer.js';
import {Provider} from 'react-redux';
import Thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(Thunk) )


    ReactDOM.render(<Provider store={store}> <App /></Provider> , document.getElementById("root"));
    