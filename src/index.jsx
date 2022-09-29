//react
import React from "react";
import ReactDOM from "react-dom/client";

//react-router-dom
import { BrowserRouter as Router } from "react-router-dom";

//estilos
import "./index.css";

//componente
import App from "./App";

//redux store
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
