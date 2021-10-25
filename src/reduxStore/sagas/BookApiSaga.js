import { call, put, takeLatest } from "redux-saga/effects";
import { FetchBooksDetail, FetchSearchBooksList } from "../../services/index";
import * as types from "../types";

function* fetchBookDetailData(action) {
  try {
    const response = yield call(FetchBooksDetail, action.payload);
    yield put({
      type: `${types.FETCH_BOOKS_DETAIL_SUCCESS}`,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: `${types.FETCH_BOOK_DETAIL_FAILURE}`,
      payload: error.message,
    });
  }
}

function* fetchSearchBookListData(action) {
  try {
    const response = yield call(FetchSearchBooksList, action.payload);
    yield put({
      type: `${types.FETCH_SEARCH_BOOKS_LIST_SUCCESS}`,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: `${types.FETCH_SEARCH_BOOK_DATA_FAILURE}`,
      payload: error.message,
    });
  }
}

export function* BookApiSaga() {
  yield takeLatest(`${types.FETCH_BOOK_DETAIL_REQUESTED}`, fetchBookDetailData);
  yield takeLatest(
    `${types.FETCH_SEARCH_BOOK_LIST_REQUESTED}`,
    fetchSearchBookListData
  );
}
