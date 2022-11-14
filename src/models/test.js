const initState = {
  testState: 1,
};

export default {
  nameSpace: 'testModels',
  state: initState,

  reduces: {
    saveState: (state, { payload }) => {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
