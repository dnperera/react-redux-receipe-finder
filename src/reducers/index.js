import { combineReducers } from "redux";
import favouritesReducer from "./favouritesReducer";

export default combineReducers({
  favourites: favouritesReducer
});
