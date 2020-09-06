import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";
// import myLogger from "./middlewates/myLogger";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      logger,
    ),
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);

serviceWorker.unregister();
