import { GET_RECIPES, GET_RECIPE } from "../actions/types";
const initialState = {
  recipes: [],
  currentRecipe: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload.recipes,
        currentRecipe: action.payload.currentRecipe
      };
    case GET_RECIPE:
      return {
        ...state,
        currentRecipe: action.payload
      };

    default:
      return state;
  }
};
