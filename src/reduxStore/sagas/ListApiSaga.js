import { call, put, takeLatest } from "redux-saga/effects";
import { FetchBooksList } from "../../services/index";
import * as types from "../types";

function* fetchBookListData() {
//   yield put({ type: `${types.FETCH_BOOKS_LIST}` });
  try {
    const response = yield call(FetchBooksList);
    console.log("respone ==>> ", response);
    yield put({
      type: `${types.FETCH_BOOKS_LIST_SUCCESS}`,
      payload: response,
    });
  } catch (error) {
    // yield put({
    //   type: `${types.FETCH_BOOK_DATA_FAILURE}`,
    //   payload: error.message,
    // });
  }
}

export function* BookListSaga() {
  yield takeLatest(`${types.FETCH_BOOK_LIST_REQUESTED}`, fetchBookListData);
}
