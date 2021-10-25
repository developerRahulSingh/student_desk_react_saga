import { all } from "redux-saga/effects";
import { BookApiSaga } from "./BookApiSaga";
import { BookListSaga } from "./ListApiSaga";

export function* rootSaga() {
  yield all([
    BookListSaga(),
    BookApiSaga(),
  ]);
}
