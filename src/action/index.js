export const getArticle = () => ({
  type: "GET_ARTICLE"
});

export const setArticle = payload => ({
  type: "SET_ARTICLE",
  payload
});
