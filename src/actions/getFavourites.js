import { GET_FAVOURITES } from "./types";

export const getFavourites = favts => {
  return {
    type: GET_FAVOURITES,
    payload: favts
  };
};
