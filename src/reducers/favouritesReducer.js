import { UPDATE_FAVOURITES } from "../actions/types";
const initialState = {
  favourites: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FAVOURITES:
      return {
        favourites: action.payload
      };
    default:
      return state;
  }
};
