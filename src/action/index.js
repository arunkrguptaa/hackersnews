export const getArticle = payload => ({
  type: "GET_ARTICLE",
  payload
});

export const setArticle = payload => ({
  type: "SET_ARTICLE",
  payload
});

export const delArticle = payload => ({
  type: "DEL_ARTICLE",
  payload
});

export const setUpvote = payload => ({
  type: "SET_UPVOTE",
  payload
});
