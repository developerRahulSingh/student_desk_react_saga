import * as types from "../types";

const INITIAL_STATE = {
  bookDetailData: [],
  searchBookList: [],
  loading: false,
};

const BookDetailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_BOOK_DETAIL_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_BOOKS_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        bookDetailData: action.payload,
      };
    case types.FETCH_SEARCH_BOOK_LIST_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SEARCH_BOOKS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        searchBookList: action.payload,
      };
    default:
      return state;
  }
};

export default BookDetailReducer;
