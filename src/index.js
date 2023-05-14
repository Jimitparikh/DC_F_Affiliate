import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./scss/varibles.scss";
import "./scss/style.scss";
import "./scss/common.scss";
import "./scss/modal.scss";
import "./scss/darkmode.scss";
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from "redux-persist";
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
