import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import persistState from "redux-localstorage";
import rootReducer from "../reducers";
const middleware = [thunk];
const initalState = {};

if (process.env.NODE_ENV !== "production") {
  const { createLogger } = require("redux-logger");
  middleware.push(
    createLogger({
      collapsed: true,
      diff: true
    })
  );
}
const store = createStore(
  rootReducer,
  initalState,
  compose(
    applyMiddleware(...middleware),
    persistState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
