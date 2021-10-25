import { all } from "redux-saga/effects";
import { BookListSaga } from "./ListApiSaga";

export function* rootSaga() {
  yield all([BookListSaga()]);
}
