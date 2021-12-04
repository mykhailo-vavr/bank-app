const handlers = {
  DEFAULT: state => state,
  SET_ACCOUNT: (state, { payload }) => ({
    ...state,
    account: payload
  })
};

export const accountsReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
