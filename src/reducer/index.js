const initialState = {
  article: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ARTICLE":
      return {
        ...state,
        loading: true
      };
    case "SET_ARTICLE":
      return {
        ...state,
        article: action.payload,
        loading: false
      };
    case "DEL_ARTICLE":
      const localData = localStorage.getItem("hide")
        ? `${localStorage.getItem("hide")},${action.payload}`
        : `${action.payload}`;
      localStorage.setItem("hide", localData);
      return {
        ...state,
        article: state.article.filter(e => e.objectID !== action.payload)
      };
    case "SET_UPVOTE":
      localStorage.setItem(action.payload.id, action.payload.point);
      const newArticle = state.article.map(e => {
        if (e.objectID === action.payload.id) {
          e.points = action.payload.point;
        }
        return e;
      });
      return {
        ...state,
        article: newArticle
      };
    default:
      return state;
  }
};

export default reducer;
