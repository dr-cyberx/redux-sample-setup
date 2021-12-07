export const amountReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_MONEY":
      return state + action.payload;

    case "SUB_MONEY":
      return state - action.payload;

    default:
      return state;
  }
};
