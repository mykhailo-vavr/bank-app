const handlers = {
  FETCH_ACCOUNTS: (state, { payload }) => ({
    ...state,
    accounts: payload
  }),
  DEFAULT: state => state
};

export const APIReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
