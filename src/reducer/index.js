const initialState = {
  article: [],
  loading: true,
  page: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ARTICLE":
      return {
        ...state,
        loading: true
      };
    case "SET_ARTICLE":
      console.log(state);
      return {
        ...state,
        article: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
