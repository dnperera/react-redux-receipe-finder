import axios from "axios";
import { GET_RECIPES, GET_RECIPE } from "./types";

export const getRecipes = () => dispatch => {
  axios.get(`${RECIPE_API}/v1/recipes`).then(res => {
    if (res.data) {
      axios.get(`${RECIPE_API}/v1/recipes/${res.data[0].id}`).then(result => {
        return dispatch({
          type: GET_RECIPES,
          payload: {
            recipes: res.data,
            currentRecipe: result.data
          }
        });
      });
    }
  });
};

export const getCurrentRecipe = id => dispatch => {
  axios.get(`${RECIPE_API}/v1/recipes/${id}`).then(res => {
    return dispatch({
      type: GET_RECIPE,
      payload: res.data
    });
  });
};
