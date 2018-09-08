const initialState = {
  someData: "Test"
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        data: "This is a redux test"
      };
    default:
      return state;
  }
};
