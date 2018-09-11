import { GET_FAVOURITES } from "../actions/types";
const initialState = {
  favourites: [4, 5, 6]
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_FAVOURITES":
      return { ...state, favourites: action.payload };
    default:
      return state;
  }
};
