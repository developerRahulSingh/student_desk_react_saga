import * as types from "../types";

const INITIAL_STATE = {
  bookListData: [],
  loading: false,
};

const ListApiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_BOOK_LIST_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_BOOKS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        bookListData: action.payload,
      };
    default:
      return state;
  }
};

export default ListApiReducer;
