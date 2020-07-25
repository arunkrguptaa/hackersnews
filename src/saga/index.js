import { put, takeLatest, all } from "redux-saga/effects";
import { setArticle } from "../action";
const hitPages = e =>
  `http://hn.algolia.com/api/v1/search?tags=story&page=${e}&hitsPerPage=30`;
function* fetchNews() {
  const listAll = yield fetch(hitPages(0)).then(response => response.json());
  console.log(listAll);
  yield put(setArticle(listAll));
}
function* actionWatcher() {
  yield takeLatest("GET_ARTICLE", fetchNews);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
