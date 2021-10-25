import * as types from "../types";

export const getBooksDetail = (val) => {
    return {
        type: types.FETCH_BOOK_DETAIL_REQUESTED,
        payload: val
    };
}

export const getSearchBooksList = (val) => {
    return {
        type: types.FETCH_SEARCH_BOOK_LIST_REQUESTED,
        payload: val
    };
}
