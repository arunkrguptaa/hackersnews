import { put, takeLatest, all } from "redux-saga/effects";
import { setArticle } from "../action";
const hitPages = e =>
  `https://hn.algolia.com/api/v1/search?tags=story&page=${e}&hitsPerPage=20`;
function* fetchNews(action) {
  const listAll = yield fetch(hitPages(action.payload)).then(response =>
    response.json()
  );
  const list = listAll?.hits;
  const hiddenNews = localStorage.getItem("hide");
  const newList = hiddenNews
    ? list.filter(e => !hiddenNews.includes(e.objectID))
    : list;
  const newArticle = newList.map(e => {
    if (localStorage.getItem(e.objectID)) {
      e.points = localStorage.getItem(e.objectID);
    }
    return e;
  });
  yield put(setArticle(newArticle));
}
function* actionWatcher() {
  yield takeLatest("GET_ARTICLE", fetchNews);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
