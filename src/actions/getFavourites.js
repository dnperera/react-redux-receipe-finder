import { UPDATE_FAVOURITES } from "./types";

export const updateFavourites = favts => dispatch => {
  return dispatch({
    type: UPDATE_FAVOURITES,
    payload: favts
  });
};
