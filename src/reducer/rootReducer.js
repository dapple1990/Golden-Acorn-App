const initialState = {
  counter: 0
};

function reducer(state = initialState, action) {
  console.log('reducer', state, action)
  switch (action.type) {
    case 'buy':
      return {
        counter: state.counter + 1
      }
    case 'eat':
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

export default reducer;

