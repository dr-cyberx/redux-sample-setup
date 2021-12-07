export const addMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_MONEY",
      payload: amount,
    });
  };
};

export const subMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "SUB_MONEY",
      payload: amount,
    });
  };
};
