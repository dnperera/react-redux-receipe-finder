import { combineReducers } from "redux";
import favouritesReducer from "./favouritesReducer";
import recipesReducer from "./recipesReducer";

export default combineReducers({
  currentRecipes: recipesReducer,
  currentFavourites: favouritesReducer
});
