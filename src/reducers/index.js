const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, loading: true };
    case 'NEWS_RECEIVED':
      return { ...state, news: action.json[0], loading: false }
    case 'DUMMY_SET':
      return { ...state, dummy: true, loading: false }
    case 'SET_DUMMY':
      return { ...state, loading: true }
    default:
      return state;
  }
};

export default reducer;
